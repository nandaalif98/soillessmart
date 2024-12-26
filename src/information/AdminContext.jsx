// informasi admin
import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext();

export function AdminProvider({ children }) {
  const [adminInfo] = useState({
    name: "Yayan Ruhian",
    dom: "Kalimantan Selatan",
    country: "Indonesia",
    password: "admin1234",
    email: "test@gmail.com",
  });

  return (
    <AdminContext.Provider value={adminInfo}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}