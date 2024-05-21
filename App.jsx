
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Login'
import Navbar from './Navbar'
import SignUp from './SignUp'
import User from './User'

// import {Test} from './components/component/test'

function App() {
 
  return (
    <>
    <BrowserRouter>
    <Navbar myclass="danger p-4" links={["Login","SignUp"]} />
    
    <Routes>
      <Route path='/'element={<SignUp />}/>
      <Route path='/login' element={<Login />} />
      <Route path='/user/:pid' element={<User  />} />
      
      
    </Routes>
    
    </BrowserRouter>




    </>
  )
}

export default App
