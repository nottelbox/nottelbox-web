import { Fragment, useState } from "react";
import { useTranslation } from "./locales/useTranslation";

export default function Vegan() {
    const {vegan: t} = useTranslation();
    const [openMisconception, setOpenMisconception] = useState<string>("");
    return (
        <main style={{ padding: 40 }}>
            <h1>{t.veganism}</h1>
            <p>{t.definition}</p>
            <div>
                <h2>{t.veganMisconceptions.veganMisconceptions}</h2>
                {t.veganMisconceptions.list.map(m => <Fragment key={m.name}>
                                                <h3>
                                                    {m.name}<button onClick={_ => setOpenMisconception(p => p === m.name ? "" : m.name)}>{openMisconception === m.name ? t.close : t.unfold}</button>
                                                </h3>
                                                {openMisconception === m.name && <p>{m.content}</p>}
                                                </Fragment>)}
            </div>
        </main>
    );
}
