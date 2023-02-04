import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <nav>
                <h1>Header Component</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="help">Help</NavLink>
            </nav>
        </div>
    );
}

export default Header;