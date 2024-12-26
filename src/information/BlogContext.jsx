// informasi blog
import React, { createContext, useContext, useState } from 'react';

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [blogInfo] = useState({
    title: "gunakan sistem hidroponik yang modern",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "",
  });

  return (
    <BlogContext.Provider value={blogInfo}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlog() {
  return useContext(BlogContext);
}
