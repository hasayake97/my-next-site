"use client"

import Link from "next/link";
import { usePage } from "@/context/pageContext";

export default function Logo() {
  const { page } = usePage();

  console.log(page, 'page')
  return (
    <Link href="/" className="bg-black text-white px-1">@Unot</Link>
  )
}
