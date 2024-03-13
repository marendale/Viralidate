import React, { useState } from 'react'
import { auth, db } from "../../config/firebaseConfig"; 
import "./SignUp.css";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore"; 

const SignUp = (props) => {

  // SignUp feilds
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [error, setError] = useState(null);

  // async handling function to wait for db response
  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Add a new document in collection "users" with the same UID
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        phoneNumber: phoneNumber,
        createdAt: new Date(),
      });

      // Add new doc to patientProfile collection with the same UID
      await setDoc(doc(db, "patientProfile", user.uid), {
        firstName: firstName,
        lastName: lastName,
        dateOfBirth: dateOfBirth,
      });

      // Clear form (optional)
      setEmail('');
      setPassword('');
      setFirstName('');
      setLastName('');
      setPhoneNumber('');
      setDateOfBirth('');
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
          <form onSubmit={handleSignUp}>
            <h1>Sign Up</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
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
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  ) : "";
};

export default SignUp;