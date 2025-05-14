import React, {useContext} from 'react'
import Items from '../components/Items'
import { Link } from 'react-router-dom'
import DataContext from "../context/DataContext";


const Body = () => {
  const {items} = useContext(DataContext)
  return (
    <main className="p-6">
        <Items items={items}/>
        <Link to="/item" className="flex flex-row-reverse sticky"><button className="px-4 py-2 rounded text-white bo">➕</button></Link>
    </main>
  )
}

export default Body