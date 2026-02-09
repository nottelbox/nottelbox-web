import { useTranslation } from "./locales/useTranslation";

export default function AboutMe() {
    const {aboutMe: t} = useTranslation();
    return (
        <main style={{ padding: 40 }}>
          <h1>{t.heading}</h1>
        </main>
    );
}