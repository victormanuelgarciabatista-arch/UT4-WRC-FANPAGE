import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            if (isRegistering) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
            }
            navigate('/admin'); // Assuming admin panel will be at /admin
        } catch (err) {
            setError("Error de autenticación. Revisa que tus datos sean correctos.");
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>{isRegistering ? 'Crear Cuenta' : 'Iniciar Sesión'}</h2>
                {error && <p className="error-message">{error}</p>}
                
                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contraseña:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn" style={{ width: '100%' }}>
                        {isRegistering ? 'Registrarse' : 'Entrar'}
                    </button>
                </form>

                <p className="toggle-auth">
                    {isRegistering ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
                    <span onClick={() => setIsRegistering(!isRegistering)}>
                        {isRegistering ? 'Inicia sesión aquí' : 'Regístrate aquí'}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Login;
