// informasi admin
import React, { createContext, useContext, useState } from 'react';

const TeacherContext = createContext();

export function TeacherProvider({ children }) {
  const [teacherInfo] = useState({
    name: "Yayan Ruhian",
    dom: "Kalimantan Selatan",
    country: "Indonesia",
    password: "admin1234",
    email: "test@gmail.com",
  });

  return (
    <TeacherContext.Provider value={teacherInfo}>
      {children}
    </TeacherContext.Provider>
  );
}

export function useTeacher() {
  return useContext(TeacherContext);
}