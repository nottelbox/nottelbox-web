import { useState } from "react";
import { useTranslation } from "./locales/useTranslation";

export default function Ntt() {
    const {vegan: {ntt: t}} = useTranslation();
    const [traits, setTraits] = useState<string[]>([]);

    function toggleTrait(traitKey: string){
        setTraits(p => {
            if (p.includes(traitKey)){
                return p.filter(t => t !== traitKey);
            } else {
                return [...p, traitKey];
            }
        });
    }

    const traitNames = traits.map(trait => t.traitList.find(i => i.key === trait)?.name).join(', ');

    return (<div className="ntt-container">
            <h1>{t.ntt}</h1>
            <p>{t.mainQuestion}</p>
            <h3>{t.traits}</h3>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {t.traitList.map(t => <button key={t.key} style={{color: traits.includes(t.key) ? 'red' : ''}} onClick={() => toggleTrait(t.key)}>{t.name}</button>)}
            </div>
            {traits.length > 0 && <>
                <h3>{t.consistencyCheck}</h3>
                <p>{t.consistencyIntroduction}</p>
                <ul>
                    {traits.map(tk => <li key={tk} style={{textAlign: 'left'}}>{t.traitList.find(t => t.key === tk)?.consistencyTest}</li>)}
                </ul>
                <p>{t.consistencyQuestion}</p>
                <div style={{display: 'flex'}}>
                    <div style={{width: '50%', textAlign: 'left', margin: '1rem',}}>
                        <h3>{t.noContradiction}</h3>
                        <p>{`${traitNames} ${traits.length === 1 ? t.contradictionSingularPositive : t.contradictionPluralPositive}`}</p>
                        <p>{`${traitNames} ${traits.length === 1 ? t.contradictionSingularNegative : t.contradictionPluralNegative}`}</p>
                    </div>
                    <div style={{width: '50%', textAlign: 'left', margin: '1rem',}}>
                        <h3>{t.yesReductio}</h3>
                        <p>{t.reductio}</p>
                    </div>
                </div>
            </>}
        </div>);
}