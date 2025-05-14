import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const DataContext = createContext({})

export const DataProvider = ({children}) => {
    const [items, setItems] = useState([])

  const [itemTitle, setItemTitle] = useState('')
  const [itemDes, setItemDes] = useState('')
  const [itemPriority, setItemPriority] = useState('')
  const [itemCurrentValue, setItemCurrentValue] = useState()
  const [itemFinalValue, setItemFinalValue] = useState()
  const navigate = useNavigate();
  const formatter = new Intl.DateTimeFormat('en-GB',{day: '2-digit', month: '2-digit', year: 'numeric'})

  useEffect(()=>{
    const data = localStorage.getItem('item')
    if(data){
      setItems(JSON.parse(data))
    } else {
      setItems([])
      console.log("failed")
    }
  },[])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    console.log(id)
    const datetime = formatter.format(new Date())
    let isCheck = false
    if(itemFinalValue===itemCurrentValue){
      isCheck = true
    }
    const newItem = {
      id,
      itemName: itemTitle,
      description: itemDes,
      createdDate: datetime,
      updatedDate: datetime,
      priority: itemPriority,
      isChecked: isCheck,
      finalValue: itemFinalValue,
      currentValue: itemCurrentValue
    }
    const allItems = [...items, newItem]
    localStorage.setItem('item', JSON.stringify(allItems))
    console.log(allItems)
    setItems(allItems);
    setItemTitle('')
    setItemDes('')
    setItemPriority('')
    setItemCurrentValue()
    setItemFinalValue()
    navigate('/')
  }

  const handleEdit = (id, createdDate) => {
    console.log(id)
    const datetime = formatter.format(new Date())
    let isCheck = false
    if(itemFinalValue===itemCurrentValue){
      isCheck = true
    }
    const editedItem = {
      id,
      itemName: itemTitle,
      description: itemDes,
      createdDate: createdDate,
      updatedDate: datetime,
      coverImg: null,
      priority: itemPriority,
      isChecked: isCheck,
      finalValue: itemFinalValue,
      currentValue: itemCurrentValue
    }
    const updatedItems = items.map(item => item.id === id ? editedItem : item)
    setItems(updatedItems);
    localStorage.setItem('item', JSON.stringify(updatedItems))
    setItemTitle('')
    setItemDes('')
    setItemPriority('')
    setItemCurrentValue()
    setItemFinalValue()
    navigate('/')
  }

  const handleDelete = (id) => {
    const updatedItems = items.filter(item => item.id !== id)
    setItems(updatedItems);
    console.log('delleted')
    localStorage.setItem('item', JSON.stringify(updatedItems))
    navigate('/')
  }
    return(
        <DataContext.Provider value={{
            items, itemTitle, itemDes, itemPriority, itemCurrentValue, itemFinalValue, setItemTitle,setItemDes,setItemFinalValue, setItemPriority, setItemCurrentValue, handleSubmit, handleEdit, handleDelete
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;