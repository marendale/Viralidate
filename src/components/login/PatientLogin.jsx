import React, { useState } from 'react'
import { auth } from "../../config/firebaseConfig"; 
import "./Login.css";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const PatientLogin = (props) => {

    // login feilds 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    // async handling function to wait for db response
    const handlePatientLogin = async (event) => {
        event.preventDefault();

    try {
        // signin user with email and password
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // log user to check signin successful
        console.log(user);

        // clear form (optional)
        setEmail('');
        setPassword('');
        setError(null);
        // add code to redirect or update UI here 

    } catch (error) {
        setError(error.message);
    }
  };

  return (props.trigger) ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>X</button>
        <div>
          <form onSubmit={handlePatientLogin}>
            <h1>Login</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  ) : "";
};

export default PatientLogin;