import GameOfLife from "./GameOfLife";
import { useTranslation } from "./locales/useTranslation";

export default function Projects() {
    const {projects: t} = useTranslation();
    return (
        <main style={{ padding: 40 }}>
            <h1>{t.projects}</h1>
            <GameOfLife />
        </main>
    );
}
