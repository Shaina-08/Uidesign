"use client";

import { siteConfig } from "@/config/site";
import { Icons } from "./icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
export function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="flex  items-center space-x-4 lg:space-x-6">
  <Link href="/" className="mr-6 flex items-center space-x-2">
  <span className="font-bold  border-b border-customBlue p-0.6 m-5">{siteConfig.name}</span>
    
  </Link>
</nav>
  );
}