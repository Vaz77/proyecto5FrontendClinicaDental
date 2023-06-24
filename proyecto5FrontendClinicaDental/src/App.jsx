import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './common/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';


function App() {
  return (
    <>
    <CustomNavbar />
      <Routes>
        <Route path="/"element={<HomePage/>} />
        <Route path="/registro"element={<RegisterPage/>} />
        <Route path="/login"element={<LoginPage/>} />
      </Routes>
    </>
  )
}

export default App
