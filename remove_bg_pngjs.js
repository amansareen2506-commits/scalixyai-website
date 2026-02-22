const fs = require('fs');
const PNG = require('pngjs').PNG;

fs.createReadStream('C:\\Users\\HP\\.gemini\\antigravity\\brain\\bc041d1d-7ecd-48bd-8b72-54a23c3fe7d4\\media__1771712934835.png')
    .pipe(new PNG({
        filterType: 4
    }))
    .on('parsed', function () {
        let minX = this.width, minY = this.height, maxX = 0, maxY = 0;

        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                let idx = (this.width * y + x) << 2;

                let r = this.data[idx];
                let g = this.data[idx + 1];
                let b = this.data[idx + 2];

                let dist = Math.sqrt(Math.pow(255 - r, 2) + Math.pow(255 - g, 2) + Math.pow(255 - b, 2));

                if (dist < 40) {
                    this.data[idx + 3] = 0; // Transparent
                } else {
                    // keep track of bounding box for simple cropping
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;

                    // simple edge blend
                    if (dist < 100) {
                        let alpha = Math.floor(((dist - 40) / 60) * 255);
                        this.data[idx + 3] = alpha;
                    }
                }
            }
        }

        // Add some padding to crop box
        minX = Math.max(0, minX - 10);
        minY = Math.max(0, minY - 10);
        maxX = Math.min(this.width, maxX + 10);
        maxY = Math.min(this.height, maxY + 10);

        const cropWidth = maxX - minX;
        const cropHeight = maxY - minY;

        const dst = new PNG({ width: cropWidth, height: cropHeight });
        this.bitblt(dst, minX, minY, cropWidth, cropHeight, 0, 0);

        dst.pack().pipe(fs.createWriteStream('c:\\Users\\HP\\OneDrive\\Desktop\\Scale\\ai-marketing-landing\\public\\logo.png'));
        console.log("Background removed successfully!");
    });
