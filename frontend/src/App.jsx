import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Mainpage from './components/Mainpage'
function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;
