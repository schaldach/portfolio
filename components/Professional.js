import Company from "./Company";

const content = {
    'pt-BR': [
        'A Webphy é uma startup que está desenvolvendo uma plataforma para a construção de aplicativos de IA em diversas áreas. Desenvolvi APIs, componentes de frontend e backend, protótipos e algoritmos que atuam junto com a IA construída na empresa, que foca na visão computacional e digitalização do mundo físico.'
    ],
    'en-US': [
        'Webphy is a startup that is developing a platform for building AI applications in various areas. I have developed APIs, frontend and backend components, prototypes and algorithms that work together with the AI built in the company, focused on computer vision and the digitalization of the physical world.'
    ]
}

function Professional({lang}) {
    return (
        <div className="pagesection">
            <a id='professional'></a>
            <div className="showprojects">
                <Company title='Webphy' description={content[lang][0]} tech={['JavaScript', 'Next', 'Firebase', 'React', 'CSS', 'Three.js', 'Node.js', 'Express.js']} linkedin='https://www.linkedin.com/company/webphy/' url='https://www.webphy.systems/' logo='/webphy_upscaled.jpg'/>
            </div>
        </div>
    );
}

export default Professional;