import React, {useContext, useEffect} from 'react'
import Item from '../components/Item'
import DataContext from '../context/DataContext'

const AddItem = () => {
    const {itemTitle, setItemTitle, itemDes, setItemDes, itemPriority, setItemPriority, itemCurrentValue, setItemCurrentValue, itemFinalValue, setItemFinalValue, handleSubmit} = useContext(DataContext)
    useEffect(()=>{
        setItemTitle('')
        setItemDes('')
        setItemPriority('')
        setItemCurrentValue('')
        setItemFinalValue('')
    },[])
    useEffect(()=>{
        if(parseInt(itemCurrentValue)>parseInt(itemFinalValue)){
            console.log("Invalid")
            setItemCurrentValue('')
            setItemFinalValue('')
        }
    },[itemCurrentValue,itemFinalValue])
  return (
    <div>
        <form className='flex flex-col gap-1.5' onSubmit={handleSubmit}>
            <label htmlFor='itemTitle'>Title:</label>
            <input
                autoFocus
                id='itemTitle'
                type='text'
                placeholder='Enter the title'
                required
                value={itemTitle}
                onChange={(e)=>setItemTitle(e.target.value)}
            />
            <label htmlFor='itemDes'>Description:</label>
            <textarea
                id='itemDes'
                placeholder='Enter the description'
                required
                value={itemDes}
                onChange={(e)=>setItemDes(e.target.value)}
            />
            <label htmlFor='itemPriority'>Priority:</label>
            <select
                id='itemPriority'
                value={itemPriority}
                onChange={(e)=>setItemPriority(e.target.value)}
            >
                <option value="">Select priority</option>
                <option value="high">high</option>
                <option value="medium">medium</option>
                <option value="low">low</option>
            </select>
            <label htmlFor='itemFinalValue'>Final Value:</label>
            <input
                
                id='itemFinalValue'
                type='number'
                placeholder='Enter the final value'
                required
                value={itemFinalValue}
                onChange={(e)=>setItemFinalValue(e.target.value)}
            />
            <label htmlFor='itemCurrentValue'>Current Value:</label>
            <input
                
                id='itemCurrentValue'
                type='number'
                placeholder='Enter the current value'
                required
                value={itemCurrentValue}
                onChange={(e)=>setItemCurrentValue(e.target.value)}
            />
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default AddItem