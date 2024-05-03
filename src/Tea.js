import React, { useState } from 'react';
import './Tea.css';
import { collection, addDoc, getFirestore } from 'firebase/firestore'; // Import getFirestore
import { firebaseApp } from './config'; // Replace with the correct path to your Firebase configuration

function Tea() {
  const items = [];
  const firestore = getFirestore(firebaseApp); // Access Firestore instance correctly
  const [total, setTotal] = useState(0);
  const [buttonStatus, setButtonStatus] = useState({}); // Track input status

  const handleButtonClick = (number, e) => {
    e.preventDefault(); // Prevent the default behavior of the button (form submission or page refresh)
    const count = window.prompt(`Enter No of Teas For Room ${number}: ☕`);
    setTotal((prevTotal) => prevTotal + parseInt(count));
    const userCollection = collection(firestore, 'tea');
    const teaData = {
      RoomNo: number,
      TeaCount: count,
    };

    addDoc(userCollection, teaData)
      .then((docRef) => {
        console.log('TeaCount added Successfully');
        alert(`${count} Teas added from Room No ${number}`);
        setButtonStatus((prevStatus) => ({ ...prevStatus, [number]: true }));
      })
      .catch((error) => {
        console.error('Error adding TeaCount:', error);
      });
  };

  for (let i = 100; i <= 110; i++) {
    items.push(
      <button className='room' onClick={(e) => handleButtonClick(i, e)}>
        {buttonStatus[i] ? '☑️' : i}
      </button>
    );
  }
  for (let i = 200; i <= 210; i++) {
    items.push(
      <button
        className='room' onClick={(e) => handleButtonClick(i, e)}
      >
        {buttonStatus[i] ? '☑️' : i}
      </button>
    );
  }
  for (let i = 300; i <= 310; i++) {
    items.push(
      <button
        className='room'
        onClick={(e) => handleButtonClick(i, e)}
      >
        {buttonStatus[i] ? '☑️' : i}
      </button>
    );
  }

  return (
    <div>
      <h1 className='he'>It's Tea Time Guyzz😍</h1>
      {items}
      <h2 className='he'>Total No Of Teas: {total}</h2>
    </div>
  );
}

export default Tea;
