import { Routes, Route, Link } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import MarketplacePage from './pages/MarketplacePage/MarketplacePage'
import './App.css'

function App() {
  

  return (
    <>
      <Link to='/'>Home</Link>
      <Link to='/marketplace'>Marketplace</Link>
      <Link to='/about'>Avoaefq3e4</Link>

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/marketplace' element={<MarketplacePage/>} />
      </Routes>
    </>
  )
}

export default App
