import { NavLink } from "react-router";
import "./Menu.scss";
import { useTheme } from "../Theme/ThemeProvider";

function Menu() {
    const { theme, toggleTheme } = useTheme();
    const isDark = theme === "dark";
    return (<>
        <nav className="menu">
            <NavLink to="/">Home</NavLink>
            {/*<NavLink to="/charlas">Charlas</NavLink>*/}
            <NavLink to="/eventos">Eventos</NavLink>
            <NavLink to="/online-events">Online</NavLink>
            {/*<NavLink to="/cine">Cine</NavLink>*/}
            {/*<NavLink to="/frases-motivacionales">Frases Motivacionales</NavLink>*/}
            <button className="theme-toggle" aria-label="Toggle dark mode" onClick={toggleTheme}>
                {isDark ? "Light" : "Dark"}
            </button>
        </nav>
    </>);
}

export default Menu;