"use client"

import { useState, useContext, createContext } from "react";

const BlogContext = createContext({});

export const PageProvider = ({ children, config }: Readonly<{ children: React.ReactNode, config?: any}> ) => {
  const [pageConfig] = useState(config);
  console.log(pageConfig);
  return (
    <BlogContext.Provider value={pageConfig}>
      {children}
    </BlogContext.Provider>
  )
}

export const usePage = () => useContext(BlogContext);
