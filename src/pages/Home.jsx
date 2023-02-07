import Header from '../components/Header'
import Footer from '../components/Footer'
import useBearStore from '../hooks/bearStore'


export default function Home() {

    const { bears, increasePopulationByOne } = useBearStore()

    return (
        <div>
            <h1>Home Page</h1>
            <h3>Increasing Population</h3>
            <p>Population: {bears}</p>
            <button onClick={increasePopulationByOne}>Increase Population of Bears!!</button>
        </div>
    );
}
