import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/Homepage'
import Characters from './components/Characters'
import Planets from './components/Planets'
import Vehicles from './components/Vehicles'
import NotFound from './components/NotFound'

function App() {
 

  return (
    <BrowserRouter>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/characters'>Characters</NavLink>
        <NavLink to='/planets'>Planets</NavLink>
        <NavLink to='/vehicles'>Vehicles</NavLink>
      </nav>
      <Routes>
        <Route path='/' element ={<Homepage />} />
        <Route path='/characters' element ={<Characters />} />
        <Route path='/planets' element ={<Planets />} />
        <Route path='/vehicles' element ={<Vehicles />} />
        <Route path='*' element ={<NotFound />} />
      </Routes>

      <footer className="swfooter">
        Made by Jenny using the force. 
      </footer>

      
 
    </BrowserRouter>
      
  
  )
}

export default App
