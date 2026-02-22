'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
    scene: string
    className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
    return (
        <Suspense
            fallback={
                <div className="w-full h-full flex items-center justify-center">
                    <span
                        style={{
                            width: 40,
                            height: 40,
                            border: '3px solid rgba(255, 255, 255, 0.2)',
                            borderTopColor: '#fff',
                            borderRadius: '50%',
                            display: 'inline-block',
                            animation: 'spline-spin 0.8s linear infinite',
                        }}
                    />
                    <style>{`@keyframes spline-spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            }
        >
            <Spline scene={scene} className={className} />
        </Suspense>
    )
}
