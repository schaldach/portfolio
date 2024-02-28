import { useRef, useEffect, useState } from 'react'
import ThreeScene from './ThreeScene';

function ThreeCanvas({animationEnabled}) {
    const canvasRef = useRef(null);
    const animationRef = useRef(true)
    const [scene, setScene] = useState(null)

    useEffect(() => {
        let scene3D = new ThreeScene(canvasRef, animationRef)
        setScene(scene3D)
    }, [])

    useEffect(() => {
        if(scene){
            scene.changeAnimation(animationEnabled, animationRef)
        }
    }, [animationEnabled])

    return (<canvas className='three-scene' ref={canvasRef} />);
}

export default ThreeCanvas;