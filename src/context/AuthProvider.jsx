import React, { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
  // localStorage.clear() // Clear localStorage at the start

   const [userData, setUserData] = useState({ employees: null, admin: null })  // Optional: Safe default


 useEffect(() => {
  setLocalStorage();
  const { employees, admin } = getLocalStorage();
  setUserData({ employees, admin }); // ✅ Keep it as object
}, []);

  return (
    
      <AuthContext.Provider value={{ userData, setUserData }}>
        {children}
        </AuthContext.Provider>
   
  )
}

export default AuthProvider
