import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; 2026 WRC Islas Canarias - Todos los derechos reservados | <Link to="/privacy">Política de Privacidad y Cookies</Link></p>

                <div className="social-icons">
                    <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                        <span>📷 Instagram</span>
                    </a>
                </div>
                <div className="footer-links">
                    <a href="https://rallyislascanarias.com/es/" target="_blank" rel="noopener noreferrer">Web Oficial WRC</a>
                    <a href="https://github.com/victormanuelgarciabatista-arch" target="_blank" rel="noopener noreferrer">Mi GitHub</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
