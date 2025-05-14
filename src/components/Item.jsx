import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({item}) => {
  return (
    <div className='px-3 pl-3 border-2 border-amber-500'>
      <Link to={`/item/view/${item.id}`}>
        <h1 className='text-2xl font-bold'>{item.itemName}</h1>
        <img/>
        <p>{item.description}</p>
        <progress value={item.currentValue} max={item.finalValue}></progress>
        <p>Edited:{item.updatedDate}</p>
        <p>Status:{item.isChecked ? "✔" : "❌"}</p>
      </Link>
    </div>
  )
}

export default Item