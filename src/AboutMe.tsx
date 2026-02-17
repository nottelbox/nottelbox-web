import { useTranslation } from "./locales/useTranslation";
import SkillCard from "./SkillCard";

export default function AboutMe() {
    const {aboutMe: t} = useTranslation();
    return (
        <main style={{ padding: 40 }}>
          <h1>{t.heading}</h1>
          <p className="introduction">{t.introduction}</p>
          <div className="skill-container">
              {t.skills.map(s => <SkillCard key={s.heading} skill={s}/>)}
          </div>
          <h3>{t.contact}</h3>
          <a href="mailto:simonblum@hotmail.de" className="email">{t.emailMe}</a>
        </main>
    );
}
