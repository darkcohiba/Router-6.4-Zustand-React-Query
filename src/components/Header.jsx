import { NavLink, useNavigate } from "react-router-dom";
import useStore from '../hooks/store'

function Header() {
    const { users } = useStore()

    const navigate = useNavigate()
    const username = users[0]
    return (
        <div>
            <nav>
                <h1 onClick={()=>(navigate("/"))}>Hello {username}</h1>
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="help">Help</NavLink>
            </nav>
        </div>
    );
}

export default Header;