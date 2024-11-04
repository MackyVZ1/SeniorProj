import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Mainpage from './components/Mainpage'
import Aboutus from './components/Aboutus';
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
