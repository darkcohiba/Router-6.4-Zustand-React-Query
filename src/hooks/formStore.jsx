import { create } from 'zustand';
import {devtools, persist} from 'zustand/middleware'


const formStore = (set) => ({
    //user state
    form: {},
    addForm: (key, value) => set((state)=> ({
        form: {
            ...state.form,
            [key] : value
        },

    })),
    clearForm: () => set({ form: {} }),  // Clear form data

})

const useFormStore = create(
    devtools(
        persist(formStore, {
            name: "forms",
        })
    )
)


export default useFormStore;

