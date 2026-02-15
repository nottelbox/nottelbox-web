import { Fragment, type Dispatch, type SetStateAction } from "react";
import { useTranslation } from "./locales/useTranslation";
import type { VeganMisconception } from "./locales/translations.types.ts";

type VeganMisconceptionProps = {
    m: VeganMisconception
    openMisconception: string;
    setOpenMisconception: Dispatch<SetStateAction<string>>;
};

export default function VeganMisconceptionCard({
    m,
    openMisconception, setOpenMisconception}: VeganMisconceptionProps) {
    const {vegan: t} = useTranslation();
    return (<Fragment key={m.name}>
                <h3>
                    {m.name}<button onClick={_ => setOpenMisconception(p => p === m.name ? "" : m.name)}>{openMisconception === m.name ? t.close : t.unfold}</button>
                </h3>
                {openMisconception === m.name && <p>{m.content}</p>}
            </Fragment>);
}
