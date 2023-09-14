import { create } from 'zustand';


const itemStore = create(set => ({
    items: [],
    setItems: (newItems) => set({ items: newItems }),
    addItems: (item) => set(state => ({ items: [...state.items, item] })),
    clearItems: () => set({ items: [] }),
    deleteItemById: (id) => set(state => ({
        items: state.items.filter(item => item.id !== id)
    })),

    replaceItemById: (id, newItem) => set(state => ({
        items: state.items.map(item => item.id === id ? newItem : item)
    }))
}))

export default itemStore;