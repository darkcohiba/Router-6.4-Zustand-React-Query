import { create } from 'zustand';

const useStore = create((set) => ({

    // bear state
    bears: 0,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),

    //user state
    users: ["DarkCohiba"],
    addUser: (user) => set((state)=> ({
        users: [user, ...state.users]
    })),
    // username: "DarkCohiba",
    // setUserName: (username) => set((state) => ({ username: username}))
    // setUserName: (user) => set({ username: text })

}))

export default useStore

