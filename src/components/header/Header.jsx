import { useState } from 'react';
import { Link } from "react-router-dom"
import './Header.css'

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src="/logo.png" alt="WRC Logo" className="logo-img" />
                <h1 className="logo-text">WRC <span className="highlight">Islas Canarias</span></h1>
            </div>

            <button className="hamburger-btn" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </button>

            <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                <ul>
                    <li><Link to="/" onClick={toggleMenu}>Inicio</Link></li>
                    <li><Link to="/gallery" onClick={toggleMenu}>Galería</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contacto</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header