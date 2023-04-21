import Company from "./Company";

const content = {
    'pt-BR': [
        'Atuei como desenvolvedor Web Fullstack Júnior na Webphy, desenvolvendo algoritmos, protótipos, demonstrações e sites que agregassem com a inteligência artificial desenvolvida na empresa, voltada para a visão computacional e a digitalização do mundo físico.'
    ],
    'en-US': [
        'I worked as a Junior Fullstack Web developer at Webphy, developing algorithms, prototypes, demos and websites that aggregated with the artificial intelligence created at the company, focused on computational vision and digitalization of the material world.'
    ]
}

function Professional({lang}) {
    return (
        <div className="pagesection">
            <a id='professional'></a>
            <div className="showprojects">
                <Company title='Webphy' description={content[lang][0]} tech={['JavaScript', 'Next', 'Firebase', 'React', 'CSS', 'Three.js']} linkedin='https://www.linkedin.com/company/webphy/' url='https://www.webphy.systems/' logo='/webphy.png'/>
            </div>
        </div>
    );
}

export default Professional;