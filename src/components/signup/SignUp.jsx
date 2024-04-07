import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../../config/firebaseConfig";
import "./SignUp.css";

const SignUp = ({ trigger, setTrigger, type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [clinicCode, setClinicCode] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);


  const handleSignUp = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
  
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        phoneNumber: phoneNumber,
        createdAt: new Date(),
      });
  
      if (type === 'patient') {
        await setDoc(doc(db, "patientProfile", user.uid), {
          firstName: firstName,
          lastName: lastName,
          dateOfBirth: dateOfBirth,
        });
      } else if (type === 'admin') {
        await setDoc(doc(db, "adminProfile", user.uid), {
          firstName: firstName,
          lastName: lastName,
          clinicCode: clinicCode,
        });
      }
  
        // Success
        setShowSuccess(true);
      setTimeout(() => {
        // Reset fields and error
        setEmail('');
        setPassword('');
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setDateOfBirth('');
        setClinicCode('');
        setError(null);
        
        setShowSuccess(false); 
        setTrigger(false); 
      }, 1000); 

    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
    return (trigger) ? (
      <div className="popup">
        <div className="popup-inner">
          <button className="close-btn" onClick={() => setTrigger(false)}>X</button>
          <div>
            <form onSubmit={handleSignUp}>
              <h1>Sign Up</h1>
              {error && <p className="error-message">{error}</p>}
              {showSuccess && <div className="success-message">Sign up successful. You will now be redirected...</div>}
              <div>
                <label>First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div>
                <label>Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <label>Date of Birth</label>
                <input
                  type="date"
                  value={dateOfBirth}
                  onChange={(e) => setDateOfBirth(e.target.value)}
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
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
              {type === 'admin' && (
                <div>
                  <label>Clinic Code</label>
                  <input
                    type="text"
                    value={clinicCode}
                    onChange={(e) => setClinicCode(e.target.value)}
                  />
                </div>
              )}
              {loading && <div className="spinner"></div>}
              <button type="submit" disabled={loading}>SIGN UP</button>
            </form>
          </div>
        </div>
      </div>
    ) : null;
  };
  
  export default SignUp;