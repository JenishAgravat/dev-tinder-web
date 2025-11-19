import { useState } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import{Provider} from "react-redux"
import appStore from './utils/appStore'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/login' element={<div>Login Page</div>} />
      </Routes>
    </BrowserRouter>
     <NavBar/>
    <h1 className='text-4xl b'>Hello world</h1>
    </Provider>
    </>
  )
}

export default App
