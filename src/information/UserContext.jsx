// informasi User
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// di BE nanti ganti pake user yg lagi login
export function UserProvider({ children }) {
  const [userInfo] = useState({
    name: "John Doe",
    dom: "Tangerang",
    number: "0812345678",
    password: "admin1234",
    email: "test@gmail.com",
  });

  return (
    <UserContext.Provider value={userInfo}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
