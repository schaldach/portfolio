import { useRef, useEffect, useState } from 'react'
import ThreeScene from './ThreeScene';

function ThreeCanvas({animationEnabled}) {
    const canvasRef = useRef(null);
    const [scene, setScene] = useState(null)

    useEffect(() => {
        let scene3D = new ThreeScene(canvasRef)
        setScene(scene3D)
    }, [])

    useEffect(() => {
        if(scene){
            scene.changeAnimation(animationEnabled)
        }
    }, [animationEnabled])

    return (<canvas className='three-scene' ref={canvasRef} />);
}

export default ThreeCanvas;