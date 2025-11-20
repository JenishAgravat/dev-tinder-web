import { useState } from 'react'
import NavBar from './components/NavBar'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import{Provider} from "react-redux"
import appStore from './utils/appStore'
import Login from './components/Login'
import Signup from './components/Signup'
import Feed from './components/Feed'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Provider store={appStore}>
       <NavBar/>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='/login' element={<div><Login/></div>} />
        <Route path='/Signup' element={<div><Signup/></div>} />
        <Route path='/Feed' element={<div><Feed/></div>} />
      </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
