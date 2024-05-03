import React, { createContext, useContext } from 'react';
import { firebaseApp } from './config';

const FirebaseContext = createContext(null);
const ac=createContext(null)

export function FirebaseContextProvider({ children }) {
  return (
    <FirebaseContext.Provider value={firebaseApp}>
      {children}
    </FirebaseContext.Provider>
  );
}

export function useFirebase() {
  return useContext(FirebaseContext);
}
