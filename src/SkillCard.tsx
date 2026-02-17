import type {Skill} from "./locales/translations.types";

type SkillCardProps = {
    skill: Skill
};

export default function SkillCard({skill: {symbol, heading, explanation}}: SkillCardProps) {
    return (<div className="skill-card">
                <h1>{symbol}</h1>
                <h3 className="skill-heading">{heading}</h3>
                <p className="skill-explanation">{explanation}</p>
            </div>);
}
