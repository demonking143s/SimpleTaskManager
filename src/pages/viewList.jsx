import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import DataContext from '../context/DataContext';

const ViewList = () => {
  const {items, handleDelete} = useContext(DataContext)
  const {id} = useParams();
  const item = items.find(item => (item.id).toString()===id)
  return (
    <div className='px-3 pl-3 border-2 border-amber-500'>
      <article>
        {items &&
        <>
        <h1 className='text-2xl'>{item.itemName}</h1>
        <p>{item.description}</p>
        <div>
          <progress value={item.currentValue} max={item.finalValue}></progress>
          <h2>FinalValue:{item.finalValue}</h2>
          <h2>CurrentValue:{item.currentValue}</h2>
        </div>
        <h3 className={item.priority === 'high' ? 'text-red-500' : item.priority === 'medium' ? 'text-yellow-500' : 'text-green-500'}>Priority:{item.priority}</h3>
        <p>Created:{item.createdDate}</p>
        <p>Edited:{item.updatedDate}</p>
        <p>Status:{item.isChecked ? "✔" : "❌"}</p>
        <Link to={`/item/edit/${item.id}`}><button className="px-4 py-2 rounded text-white">⚙</button></Link>
        <button onClick={()=>handleDelete(item.id)}>🗑</button>
        </>
      }
      </article>
    </div>
  )
}

export default ViewList