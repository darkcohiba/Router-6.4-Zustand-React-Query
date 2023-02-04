import { create } from 'zustand';

const useStore = create((set) => ({

    // bear state
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    //user state
    user: {username: "DarkCohiba"},
    setUserName: () => set((text) => ({ username: text}))
    // setUserName: (user) => set({ username: text })
}))

export default useStore

