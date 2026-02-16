import { type Dispatch, type SetStateAction } from "react";
import type { VeganMisconception } from "./locales/translations.types.ts";
//import chevron from "./assets/chevron.svg";


type VeganMisconceptionProps = {
    m: VeganMisconception
    openMisconception: string;
    setOpenMisconception: Dispatch<SetStateAction<string>>;
};

export default function VeganMisconceptionCard({
    m,
    openMisconception, setOpenMisconception}: VeganMisconceptionProps) {
    return (<>
                <button
                onClick={_ => setOpenMisconception(p => p === m.name ? "" : m.name)}
                className="misconception-button">
                    <span>{m.name}</span>
                    {/*<img
                      src={chevron}
                      className={`chevron ${openMisconception === m.name ? "open" : ""}`}
                      alt=""
                    />*/}
                </button>
                {openMisconception === m.name
                    && <p className="misconception-text">{m.content}</p>}
            </>);
}
