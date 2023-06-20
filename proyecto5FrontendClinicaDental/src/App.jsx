import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'


function App() {
  return (
    <>
      <h1></h1>
      <Routes>
        <Route path="/"element={<HomePage/>} />
      </Routes>
    </>
  )
}

export default App
