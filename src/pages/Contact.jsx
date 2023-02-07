import Header from '../components/Header'
import Footer from '../components/Footer'
import useUserStore from '../hooks/userStore'


export default function Contact() {
    const { users, addUser } = useUserStore()

    const username = users[0]
    console.log(users)


    function onSubmit(e){
        e.preventDefault()
        addUser(e.target["username"].value)
        console.log(e.target["username"].value)
        console.log(username)
    }


    return ( 
        <div>
            <h1>Contact Page</h1>
            <p>Login with your own Username below</p>
            <form onSubmit={onSubmit}>
                <label>Username: </label>
                <input type="text" name="username" placeholder={username}></input>
            </form>
            <div id="userList">
                <p>Active User List</p>
                {users.map((user)=>{
                    return(
                        <p>Username: {user}</p>
                    )
                    
                })}
            </div>
        </div>
    );
}
