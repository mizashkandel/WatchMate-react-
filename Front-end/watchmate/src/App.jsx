import './App.css'
import NavbarComponent from './components/NavBar/NavBar'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomePage from './pages/Homepage'
import Userlogin from './pages/login'
// import StreamPage from './pages/Streampage'




function App() {
  
  return (
    <>
    <NavbarComponent/>
    <Routes>
      <Route path = '/home' element={<HomePage />}/>
      <Route path ='/login' element={<Userlogin />}/>
      
      {/* <Route path = '/stream' element={<StreamPage />}/> */}
        
    </Routes>
    </>
  )
}

export default App
