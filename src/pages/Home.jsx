import Header from '../components/Header'
import Footer from '../components/Footer'
import useBearStore from '../hooks/bearStore'
import useCartStore from '../hooks/cartStore'



export default function Home() {

    const { bears, increasePopulationByOne } = useBearStore()
    //again one line to import it without any async issues!!!
    const { cart, increaseCartByOne } = useCartStore()
    //i dont have to import both the cartID and the cart setter, both are available though!

    return (
        <div>
            <h1>Home Page</h1>
            <h3>Increasing Population</h3>
            <p>Population: {bears}</p>
            <button onClick={increasePopulationByOne}>Increase Population of Bears!!</button>
            <p onClick={increaseCartByOne}>Current Cart Number is: {cart}</p>
        </div>
    );
}
