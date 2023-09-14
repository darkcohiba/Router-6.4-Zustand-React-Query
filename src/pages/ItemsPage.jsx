import React from 'react'
import itemStore from '../hooks/itemStore'
import { useState } from 'react';

function ItemsPage() {
    const item = itemStore()
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create a new item object
        const newItem = {
            id: Date.now(), // This will give a unique ID based on the current timestamp
            name,
            description,
            price: parseFloat(price) // Convert the price string to a number
        };
        // Add the new item to the store
        item.addItems(newItem);

        // Clear the form fields
        setName('');
        setDescription('');
        setPrice('');
    };

    console.log(item.items)


    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Price:</label>
                    <input
                        type="number"
                        step="0.01"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Add Item</button>
            </form>
        </>

    )
}

export default ItemsPage