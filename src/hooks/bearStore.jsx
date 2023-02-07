import { create } from 'zustand';
import {devtools, persist} from 'zustand/middleware'

const bearStore = (set) => ({

    // bear state
    bears: 0,
    increasePopulationByOne: () => set((state) => ({ bears: state.bears + 1 })),
    increasePopulationBy100: () => set((state) => ({ bears: state.bears + 100 })),

    removeAllBears: () => set({ bears: 0 }),
})

const useBearStore = create(
    devtools(
        persist(bearStore, {
            name: "bears",
        })
    )
)


export default useBearStore;
