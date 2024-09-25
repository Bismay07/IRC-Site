// components/Navbar.js
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import Image from "next/image"
import logo from "./IRC_Logo.png"
import Links from "./Links";
import LRBtn from "./login-register";

const Navbar = () => {
    return (
        <nav className="container mx-auto p-4 flex justify-between items-center backdrop-blur">
            <div className="text-white text-2xl font-bold">
                <Link href="/" className="text-slate-400">
                    <Image src={logo} width={50} height={50} />
                </Link>
            </div>
            <div className="md:hidden flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Menu />
                    </SheetTrigger>
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <SheetContent side="right">
                        <SheetHeader>
                            <SheetTitle>BBlog</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col items-center gap-5">
                                    <Link
                                        href="/about"
                                        className="hover:scale-x-110 hover:font-semibold transition duration-300 ease-in"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="hover:scale-x-110 hover:font-semibold transition duration-300 ease-in"
                                    >
                                        Events
                                    </Link>
                                    <Link
                                        href="/blog"
                                        className="hover:scale-x-110 hover:font-semibold transition duration-300 ease-in"
                                    >
                                        Shop
                                    </Link>

                                    <div className="flex bottom-0">
                                        <LRBtn />
                                    </div>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>
            <div className="hidden md:flex space-x-4 items-center">
                <ModeToggle />
                <Links />
            </div>
        </nav>
    );
};

export default Navbar;
