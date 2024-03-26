"use client";

import Link from "next/link";
import { usePage } from "@/context/pageContext";

const Logo = () => {
  const pageConfig = usePage();

  return (
    <Link href="/" className="bg-black text-white px-1">{pageConfig.title}</Link>
  )
};

export default Logo;
