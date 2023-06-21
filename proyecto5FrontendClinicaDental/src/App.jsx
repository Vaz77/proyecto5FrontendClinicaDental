import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import RegisterPage from './pages/RegisterPage/RegisterPage'


function App() {
  return (
    <>
      <h1></h1>
      <Routes>
        <Route path="/"element={<HomePage/>} />
        <Route path="/registro"element={<RegisterPage/>} />
      </Routes>
    </>
  )
}

export default App
