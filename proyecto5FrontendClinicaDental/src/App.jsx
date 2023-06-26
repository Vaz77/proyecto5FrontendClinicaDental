import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './common/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import ServicesPage from './pages/ServicesPage/ServicesPage';


function App() {
  return (
    <>
    <CustomNavbar />
      <Routes>
        <Route path="/"element={<HomePage/>} />
        <Route path="/registro"element={<RegisterPage/>} />
        <Route path="/login"element={<LoginPage/>} />
        <Route path="/perfil" element={<ProfilePage />} />
        <Route path="/servicios" element={<ServicesPage />} />
      </Routes>
    </>
  )
}

export default App
