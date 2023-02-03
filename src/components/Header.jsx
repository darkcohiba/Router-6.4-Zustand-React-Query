import { NavLink } from "react-router-dom";

function Header() {
    return (
        <div>
            <h2>Header Component</h2>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
            <NavLink to="help">Help</NavLink>
        </div>
    );
}

export default Header;