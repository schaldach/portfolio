import Company from "./Company";

const content = {
    'pt-BR': [
        'Atuamente trabalho como desenvolvedor Web Full Stack Júnior na Webphy, desenvolvendo algoritmos, protótipos, demonstrações e sites e que agregam com a inteligência artificial desenvolvida na empresa, usando visão computacional para a digitalização do mundo físico.'
    ],
    'en-US': [
        'I currently work as a Junior Full Stack Web developer at Webphy, developing algorithms, prototypes, demos and websites that also aggregated with the artificial intelligence developed at the company, using computational vision for the digitalization of the material world.'
    ]
}

function Professional({lang}) {
    return (
        <div className="pagesection">
            <a id='professional'></a>
            <div className="showprojects">
                <Company title='Webphy' description={content[lang][0]} tech={['JavaScript', 'Next', 'Firebase', 'React', 'CSS', 'Three.js', 'Node.js']} linkedin='https://www.linkedin.com/company/webphy/' url='https://www.webphy.systems/' logo='/webphy.png'/>
            </div>
        </div>
    );
}

export default Professional;