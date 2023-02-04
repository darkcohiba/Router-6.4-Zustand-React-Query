import { NavLink } from "react-router-dom";
import useStore from '../hooks/store'

function Header() {
    const { user } = useStore()

    console.log(user)
    return (
        <div>
            <nav>
                <h1>Hello {user.username}</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="help">Help</NavLink>
            </nav>
        </div>
    );
}

export default Header;