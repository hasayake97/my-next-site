"use client"

import Link from "next/link";
import { usePage } from "@/context/pageContext";

export default function Logo() {
  const pageConfig = usePage();

  return (
    <Link href="/" className="bg-black text-white px-1">{pageConfig.title}</Link>
  )
}
