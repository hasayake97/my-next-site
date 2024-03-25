"use client"

import type { PageConfigType } from "@/types";
import { useState, useContext, createContext } from "react";

const BlogContext = createContext<PageConfigType>({} as PageConfigType);

export const PageProvider = ({ children, config }: Readonly<{ children: React.ReactNode, config?: PageConfigType}> ) => {
  const [pageConfig] = useState(config);

  return (
    <BlogContext.Provider value={pageConfig as PageConfigType}>
      {children}
    </BlogContext.Provider>
  )
}

export const usePage = (): PageConfigType => useContext(BlogContext);
