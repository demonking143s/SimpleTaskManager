import React from 'react'
import { useEffect, useState } from 'react'
// import { format } from 'date-fns'
import Header from './components/Header'
import Body from './pages/Body'
import { Route, Routes} from 'react-router-dom'
import ViewList from './pages/viewList';
import AddItem from './pages/addItem';
import Missing from './pages/Missing';
import EditItem from './pages/EditItem'
import {DataProvider} from './context/DataContext'

const App = () => {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [dark])
  return (
    <div className='bg-white dark:bg-black text-black dark:text-white min-h-screen min-w-screen'>
      <DataProvider>
      <Header darkMode={dark} toggleDark={() => setDark(!dark)} />
      <Routes>
        <Route path='/' element={<Body />}/>
        <Route path='/item'>
          <Route index element={<AddItem />}/>
          <Route path='view/:id' element={<ViewList />}/>
          <Route path='edit/:id' element={<EditItem />}/>
        </Route>
        <Route path="*" element={<Missing />}/>
      </Routes>
      </DataProvider>
    </div>
  )
}

export default App