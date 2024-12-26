// informasi kursus
import React, { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export function CourseProvider({ children }) {
  const [courseInfo] = useState({
    title: "gunakan sistem hidroponik yang modern",
    price: "15.000",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    thumbnail: "",
  });

  return (
    <CourseContext.Provider value={courseInfo}>
      {children}
    </CourseContext.Provider>
  );
}

export function useCourse() {
  return useContext(CourseContext);
}
