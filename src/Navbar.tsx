import { NavLink } from "react-router";
import { useTranslation } from "./locales/useTranslation"
import LanguageSwitcher from "./locales/LanguageSwitcher";

export default function Navbar() {
    const t = useTranslation();

    return (<nav>
        <NavLink
         to="/"
         className="navlink"
        >
            nottelbox
        </NavLink>
        <NavLink
         to="/vegan"
         className="navlink"
        >
            {t.navbar.vegan}
        </NavLink>
        <NavLink
         to="/projects"
         className="navlink"
        >
            {t.navbar.projects}
        </NavLink>
        <LanguageSwitcher />
    </nav>)
}