import React, { useState } from 'react'
import Image from 'next/image';

function Project({ title, description, tech, images, github, url }) {
    const [currentImage, changeImage] = useState(0)
    const techclasses = {
        'JavaScript': 'jscard',
        'p5': 'p5card',
        'Supabase': 'supabasecard',
        'CSS': 'csscard',
        'React': 'reactcard',
        'Next': 'nextcard',
    }
    return (
        <div className='project'>
            <div className="imgwrapper">
                {images.map((img, index) =>
                    <div key={index}>
                        {index === currentImage ? <img className='projectimage' src={img} /> : <></>}
                    </div>
                )}
                <div className='left-image-arrow' onClick={() => { if (currentImage > 0) { changeImage(currentImage - 1) } else { changeImage(images.length - 1) } }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg></div>
                <div className='right-image-arrow' onClick={() => { if (currentImage < images.length - 1) { changeImage(currentImage + 1) } else { changeImage(0) } }}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg></div>
                <div className='img-squares'>
                    {images.map((img, index) =>
                        <div onClick={() => changeImage(index)} key={index} className={index === currentImage ? 'filled' : ''}></div>
                    )}
                </div>
            </div>
            <div className="showtext">
                <div className="showtitle">{title}
                    <div className="showicons">
                        <a href={github} target='_blank' rel="noreferrer"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                        <a href={url} target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /></svg></a>
                    </div>
                </div>
                <div className="showdescription">{description}</div>
                <div className="techused">
                    {tech.map((language, index) =>
                        <div key={index} className={techclasses[language]}>{language}</div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Project;