import { useState } from "react";
import { useTranslation } from "./locales/useTranslation";
import VeganMisconceptionCard from "./VeganMisconceptionCard";
import Ntt from "./Ntt";

export default function Vegan() {
    const {vegan: t} = useTranslation();
    const [openMisconception, setOpenMisconception] = useState<string>("");
    return (
        <main style={{ padding: 40 }}>
            <h1>{t.veganism}</h1>
            <p>{t.definition}</p>
            <Ntt />
            <div>
                <h1>{t.veganMisconceptions.veganMisconceptions}</h1>
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
