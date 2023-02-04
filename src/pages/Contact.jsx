import Header from '../components/Header'
import Footer from '../components/Footer'
import useStore from '../hooks/store'


export default function Contact() {
    const { user, setUserName } = useStore()

    function onSubmit(e){
        e.preventDefault()
        setUserName(e.target["username"].value)
        console.log(e.target["username"].value)
    }


    return ( 
        <div>
            <h1>Contact Page</h1>
            <p>Update your Username below</p>
            <form onSubmit={onSubmit}>
                <label>Username: </label>
                <input type="text" name="username" placeholder={user.username}></input>
            </form>
        </div>
    );
}
