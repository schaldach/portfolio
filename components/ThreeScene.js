import { useRef, useEffect, useState } from 'react'

function ThreeScene() {
    const containerRef = useRef(null);

    function distance(x1, x2, y1, y2) {
        return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
    }

    useEffect(() => {
        const canvas = containerRef.current
        const ctx = canvas.getContext('2d')
        const allPoints = []
        for (let i = 0; i < 60; i++) {
            allPoints.push({
                x: Math.floor(Math.random() * 700),
                y: Math.floor(Math.random() * 700),
                xVelocity: Math.random() * 4 - 2,
                yVelocity: Math.random() * 4 - 2
            })
        }
        function animate() {
            window.requestAnimationFrame(animate)
            ctx.fillStyle = '#262b46'
            ctx.strokeStyle = '#262b46'
            ctx.clearRect(0, 0, 700, 700);
            allPoints.forEach((point, index) => {
                ctx.beginPath();
                ctx.arc(point.x, point.y, 2, 0, 2 * Math.PI, false)
                ctx.fill();
                ctx.stroke()
                ctx.closePath()
                point.x += point.xVelocity
                point.y += point.yVelocity
                if (point.x > 700) {
                    point.x = 0
                }
                else if (point.x < 0) {
                    point.x = 700
                }
                if (point.y > 700) {
                    point.y = 0
                }
                else if (point.y < 0) {
                    point.y = 700
                }
                for (let y = index + 1; y < allPoints.length; y++) {
                    if (distance(point.x, allPoints[y].x, point.y, allPoints[y].y) < 50) {
                        ctx.beginPath();
                        ctx.moveTo(point.x, point.y);
                        ctx.lineTo(allPoints[y].x, allPoints[y].y);
                        ctx.stroke();
                    }
                }
            })
        }
        animate()
    }, [])
    return (<canvas width={700} height={700} className='three-scene' ref={containerRef} />);
}

export default ThreeScene;