import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Mainpage from './components/Mainpage'
import Aboutus from './components/Aboutus'
import Floristry from './components/floristry/Floristry';
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/floristry" element={<Floristry/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
