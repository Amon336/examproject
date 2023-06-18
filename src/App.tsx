import './App.css'
import { Link, Route, Routes} from 'react-router-dom'

export const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Routes>
        <Route path="/" element={<div>main</div>}/>
        <Route path="/about" element={<div>about</div>}/>
      </Routes>
    </div>
  )
}
