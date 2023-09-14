import React from 'react'
import itemStore from '../hooks/itemStore'

function ItemsView() {
    const item = itemStore()
    console.log(item.items)
    return (
        <div>
            <ul>
                {item.items?.map(singleItem => <li>Title: {singleItem.name}, description: {singleItem.description}</li>)}
            </ul>
        </div>
    )
}

export default ItemsView