import './App.css'
import { BrowserRouter as Router,
  Route,
  Routes
 } from 'react-router-dom'
import Login from './components/login/Login'

function App() {
  
  return (
    <div className='font-[Sarabun]'>
      <Router>
        <Routes>
          {/**หน้าล็อคอิน */}
          <Route path='/' element={<Login/>}/> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
