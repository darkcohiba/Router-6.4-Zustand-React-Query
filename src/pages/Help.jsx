import Header from '../components/Header'
import Footer from '../components/Footer'
import useStore from '../hooks/store'



export default function Help() {

    const { bears, removeAllBears } = useStore()

    return ( 
        <div>
            <h1>Help Page</h1>
            <p>if your wondering what the bear population is, it is {bears}</p>
            <button onClick={removeAllBears}>Kill the Bears!</button>
        </div>
    );
}
