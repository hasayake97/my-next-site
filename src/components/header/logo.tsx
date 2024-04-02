"use client";

import LinkExt from "@/components/link-ext";
import { usePage } from "@/context/pageContext";

const Logo = () => {
  const pageConfig = usePage();

  return (
    <LinkExt href="/" className="bg-black text-white px-1">{pageConfig.title}</LinkExt>
  )
};

export default Logo;
