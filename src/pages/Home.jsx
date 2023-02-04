import Header from '../components/Header'
import Footer from '../components/Footer'
import useStore from '../hooks/store'


export default function Home() {

    const { bears, increasePopulation } = useStore()

    return (
        <div>
            <h1>Home Page</h1>
            <h3>Increasing Population</h3>
            <p>Population: {bears}</p>
            <button onClick={increasePopulation}>Increase Population of Bears!!</button>
        </div>
    );
}
