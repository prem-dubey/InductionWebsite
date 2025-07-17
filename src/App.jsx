import './App.css'
import {Route , Routes} from 'react-router-dom'
import Home from '../src/pages/Home.jsx'
import Contact from '../src/pages/Contact.jsx'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
