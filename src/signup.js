// Signup.js
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { firebaseApp } from './config';
import './Signup.css'
import { Link } from 'react-router-dom';
function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [room, setRoom] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const auth = getAuth(firebaseApp);
    const firestore = getFirestore(firebaseApp);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userCollection = collection(firestore, 'users');
      const userData = {
        userName: userName,
        email: email,
        phone: phone,
        room: room, // Add room data
      };

      await addDoc(userCollection, userData);
      console.log('User registered successfully!');
      navigate('/login');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div>
      <div className="signupParentDiv">
        <h3 className='he'>SignUp</h3>
        {/* Your signup form */}
        <form onSubmit={handleSubmit} className='formm'>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            id="fname"
            name="name"
            placeholder="John"
          />
          <br />
          <label htmlFor="fname">Room No</label>
          <br />
          <input
            className="input"
            type="number"
            value={room} // Use the room state here
            onChange={(e) => setRoom(e.target.value)}
            id="roomNo"
            name="room"
            placeholder="RoomNo"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
            name="email"
            placeholder="john@example.com"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
            name="phone"
            placeholder="Phone number"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
            placeholder="Password"
          />
          <br />
          <br />
          <br />
          {/* Include other input fields for email, phone, and password */}
          {/* ... */}
          <button>Signup</button>
          <Link to="/login">Already have an account?</Link>
        </form>
        <p className="error-message">{errorMessage}</p>
      </div>
    </div>
  );
}

export default Signup;
