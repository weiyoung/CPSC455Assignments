import '../css/App.css'
import Home from '../pages/Home'
import About from '../pages/About'
import { BrowserRouter, Route, Link } from 'react-router-dom'

const Navbar = () => (
    <BrowserRouter>
        <nav className="navbar">
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/about">About</Link>
        </nav>
        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
    </BrowserRouter>
)

export default Navbar
