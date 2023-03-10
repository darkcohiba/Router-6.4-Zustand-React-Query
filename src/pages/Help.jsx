import Header from '../components/Header'
import Footer from '../components/Footer'
import useBearStore from '../hooks/bearStore'



export default function Help() {

    const { bears, increasePopulationBy100, removeAllBears } = useBearStore()

    return ( 
        <div>
            <h1>Help Page</h1>
            <p>if your wondering what the bear population is, it is {bears}</p>
            <p onClick={increasePopulationBy100}>Make Big Changes to the bears population by clicking me</p>
            <button onClick={removeAllBears}>Kill the Bears!</button>
        </div>
    );
}
