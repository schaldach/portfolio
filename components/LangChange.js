import { US, BR } from 'country-flag-icons/react/3x2'

function LangChange({lang, setLang}) {
    return (
        <div className="flags">
            <div onClick={() => setLang('pt-BR')} className={lang==='pt-BR'?'selected-flag':''}>
                <BR />
            </div>
            <div onClick={() => setLang('en-US')} className={lang==='en-US'?'selected-flag':''}>
                <US />
            </div>
        </div>
    );
}

export default LangChange;