"use client";


import { useTheme } from "next-themes";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import CardDarkRow from "@/components/card-row";
import CardLightRow from "@/components/card-light-row";
import CollectionSpotlight from "@/components/collection-spotlight";
import CollectionSpotDark from "@/components/collection-spotdark";

export default function Home() {
  const { theme, setTheme } = useTheme();
  if (!theme) {
    setTheme('light');
  }
  const backgroundColor = theme === 'dark' ? '#3B3E47' : '#F7F7F8';
  const imageSrc = theme === 'dark' ? '/Group 2004.png' : '/Group 2002.png';
  const imageSrc2 = theme === 'dark' ? '/Group 1838.png': '/Group 2003.png' ;
  
  return (
<div className=" items-center justify-end flex-row py-6 px-20 lg:py-10  w-full" style={{ backgroundColor: theme === 'dark' ? '#292B32' : '#FFFFFF' }}>
      <header className="z-10 sticky top-0 w-full backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="flex flex-1 items-center justify-end space-x-2">
      <div className="container flex h-14 max-w-screen-2xl items-center">
  <span style={{ fontWeight: 'bold', borderBottom: '2px solid #738FFF' }}>Sports</span>
</div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="w-10 px-0">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle Theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <div className="flex items-start gap-4 md:flex-row md:justify-start md:gap-4 px-11">
        <div className="flex-1 flex-col space-x-4 overflow-x-auto bg-customBackground">
         {theme==="dark" ? (

           <CardDarkRow/>
         ): <CardLightRow/>}
          {theme==="dark" ? (
            <CollectionSpotDark/>):
          (<CollectionSpotlight />)}

        </div>
      </div>
      <div className="grid grid-cols-12 gap-3 mt-8">
        <div className="col-span-12 col-start-1 sm:col-span-8">
          <hr />
        </div>
      </div>
    </div>
  );
  }  


         

