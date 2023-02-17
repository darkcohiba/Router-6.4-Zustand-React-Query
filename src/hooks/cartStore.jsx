import { create } from 'zustand';
import {devtools, persist} from 'zustand/middleware'
// our entire store page
const cartStore = (set) => ({

    // cart state
    //two functions that are accessible anywhere, our state of cartID and our function to 
    // edit it!
    cart: 0,
    setCart: (cartID) => {
        set((state) => ({
            cart: cartID,
        }))},
    increaseCartByOne: () => set((state) => ({ cart: state.cart + 1 })),

})

const useCartStore = create(
    devtools(
        persist(cartStore, {
            name: "cart",
        })
    )
)


export default useCartStore;
