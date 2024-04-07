import React, { useState } from 'react';
import { auth } from "../../config/firebaseConfig"; 
import "./Login.css";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handlePatientLogin = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log(userCredential.user);
    
            // Show success message
            setShowSuccess(true);
            setTimeout(() => {
                setEmail('');
                setPassword('');
                setError(null);
                setShowSuccess(false);
    
                props.setTrigger(false); 
                props.onLoginSuccess(); 
            }, 1000); 
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };
    

    return (props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
                <div>
                    <form onSubmit={handlePatientLogin}>
                        <div className="login-header">
                            <h2>Welcome to Viralidate</h2>
                            <h3>Please sign in</h3>
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        {showSuccess && <div className="success-message">Login successful. Redirecting...</div>}
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                disabled={loading}
                            />
                        </div>
                        <button type="submit" disabled={loading}>Enter</button>
                        {loading && <div className="spinner"></div>}
                    </form>
                </div>
            </div>
        </div>
    ) : "";
};

export default Login;
