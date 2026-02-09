import { useTranslation } from "./locales/useTranslation";

export default function Vegan() {
    const {vegan: t} = useTranslation();
    return (
        <main style={{ padding: 40 }}>
            <h1>{t.veganism}</h1>
            <p>{t.definition}</p>
        </main>
    );
}