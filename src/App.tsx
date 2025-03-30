import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import './App.css'
import { router } from './router'

function App() {


  return (
     <>
      <ToastContainer limit={20}/>
     <RouterProvider router= {router}/>
     </>
  )
}

export default App
