import { NavLink } from "react-router";
import { useTranslation } from "./locales/useTranslation"
import LanguageSwitcher from "./locales/LanguageSwitcher";

export default function Navbar() {
    const t = useTranslation();

    return (<nav>
        <NavLink to="/">
            nottelbox
        </NavLink>
        <NavLink to="/vegan">
            {t.navbar.vegan}
        </NavLink>
        <NavLink to="/projects">
            {t.navbar.projects}
        </NavLink>
        <LanguageSwitcher />
    </nav>)
}