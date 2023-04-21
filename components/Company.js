function Company({ title, description, tech, logo, linkedin, url }) {
    const techclasses = {
        'JavaScript': 'jscard',
        'CSS': 'csscard',
        'React': 'reactcard',
        'Next': 'nextcard',
        'Firebase': 'firebasecard',
        'Three.js': 'threecard'
    }
    return (
        <div className='project'>
            <div className="imgwrapper">
                <img className='projectimage' src={logo} /> 
            </div>
            <div className="showtext">
                <div className="showtitle">{title}
                    <div className="showicons">
                        <a href={linkedin} target='_blank' rel="noreferrer"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
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

export default Company;