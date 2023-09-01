// import { create } from 'zustand';
// import {devtools, persist} from 'zustand/middleware'
// const userStore = (set) => ({
//     //user state
//     users: [],
//     addUser: (user) => set((state)=> ({
//         users: [user, ...state.users]
//     })),
// })
// const useUserStore = create(
//     devtools(
//         persist(userStore, {
//             name: "users",
//         })
//     )
// )
// export default useUserStore;

import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

const useUserStore = create(
    devtools(
        persist(
            (set) => ({
                users: [],
                addUser: (user) => set((state) => ({ users: [user, ...state.users] }))
            }),
            { name: "users" }
        )
    )
);

export default useUserStore;