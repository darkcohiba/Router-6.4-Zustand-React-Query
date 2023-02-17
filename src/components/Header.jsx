import { NavLink, useNavigate } from "react-router-dom";
import useBearStore from '../hooks/bearStore'
import useUserStore from '../hooks/userStore'


function Header() {
    const { bears } = useBearStore()
    const { users } = useUserStore()

    const navigate = useNavigate()
    const username = users[0]
    return (
        <div>
            <nav>
                <h1 onClick={()=>(navigate("/"))}>Hello {username}</h1>
                {bears > 250 ? bears > 500 ? bears > 1000 ? bears > 2000 ? <h2 className="bear-warning">A bear is our president now!!</h2> : <h2 className="bear-warning">We are all fucked now!</h2>:<h2 className="bear-warning">the bears have over run the users</h2> : <h2 className="bear-warning">the bears will overrun the users soon!</h2> : null}
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="help">Help</NavLink>
                <NavLink to="cart">Cart</NavLink>
                <NavLink to="form">Form</NavLink>

            </nav>
        </div>
    );
}

export default Header;