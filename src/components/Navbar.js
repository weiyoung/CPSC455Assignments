import '../css/App.css';
import Home from '../pages/Home';
import About from '../pages/About';
import { Route, Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <div className="navbar">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/about">About</Link>
            </div>
            
            <Route path="/" exact component={Home}/>
            <Route path="/about" component={About}/>
        </nav>
    )
}

export default Navbar
