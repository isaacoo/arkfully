import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Facilities from './pages/Facilities'
import Nearby from './pages/Nearby'
import Reservation from './pages/Reservation'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <Router basename="/arkfully">
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/nearby" element={<Nearby />} />
          <Route path="/reservation" element={<Reservation />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

