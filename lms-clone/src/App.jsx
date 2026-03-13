import './App.css'
import Landing from './pages/Landing.jsx'
import Login from "./pages/Login.jsx";
import { Routes, Route } from 'react-router-dom'
import StudentDashboard from './pages/StudentDashboard.jsx';
function App() {

  return (
    <div className="bg-neutral-900 min-h-screen text-white">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/student' element={<StudentDashboard />} />
      </Routes>
    </div>
  )
}

export default App