import { useState } from "react";
import { useTranslation } from "./locales/useTranslation";
import VeganMisconceptionCard from "./VeganMisconceptionCard";

export default function Vegan() {
    const {vegan: t} = useTranslation();
    const [openMisconception, setOpenMisconception] = useState<string>("");
    return (
        <main style={{ padding: 40 }}>
            <h1>{t.veganism}</h1>
            <p>{t.definition}</p>
            <div>
                <h2>{t.veganMisconceptions.veganMisconceptions}</h2>
                {t.veganMisconceptions.list.map(m =>
                    <VeganMisconceptionCard
                    key={m.name}
                    m={m}
                    openMisconception={openMisconception}
                    setOpenMisconception={setOpenMisconception}/>)}
            </div>
        </main>
    );
}
