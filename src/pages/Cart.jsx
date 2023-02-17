import useCartStore from '../hooks/cartStore'
// Zustand is one page to set it up and two lines to import it!
// Importing above^^^


function Cart() {
    // Using in the line below!
    const { cart, setCart } = useCartStore()

    console.log(cart)

    return (
        <div>
            <p>current cart number: {cart}</p>
            <form onSubmit={(e)=>
                setCart(e.target.cartid.value)}>
                {/* no async issue but I should add a prevent default! */}
                <label>Update the Cart Number:</label>
                <input type="number" name="cartid" placeholder={cart}></input>
            </form>
        </div>
    );
}

export default Cart;