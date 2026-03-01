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
            </>}
        </div>);
}