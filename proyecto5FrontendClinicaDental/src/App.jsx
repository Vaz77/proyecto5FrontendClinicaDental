import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import Navbar from './common/Navbar/Navbar';



function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/"element={<HomePage/>} />
        <Route path="/registro"element={<RegisterPage/>} />
        <Route path="/login"element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App
