// components/Navbar.js
/*import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { links } from "@/constants";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import { ModeToggle } from "./theme-btn";
import Image from "next/image";
import logo from "./IRC_Logo.png";
import Links from "./Links";
import LRBtn from "./login-register";

const Navbar = () => {
    return (
        <nav className="w-full fixed border-b backdrop-blur z-30">
            <div className="container mx-auto p-4 flex justify-between items-center">
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
                                <SheetTitle>Iter Robotics Club</SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col items-center gap-5">
                                        {links.map((link, index) => {
                                            return <Link
                                                href={link.url}
                                                className="hover:scale-x-110 hover:font-semibold transition duration-300 ease-in text-green-300"
                                            >
                                                {link.name}
                                            </Link>
                                        })}
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
            </div>
        </nav>
    );
};

export default Navbar;
*/

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
import Image from "next/image";
import logo from "./IRC_Logo.png";
import Links from "./Links";
import LRBtn from "./login-register";

const Navbar = () => {
    return (
        <nav className="container mx-auto p-4 flex justify-between items-center backdrop-blur">
            {/* Logo Section */}
            <div className="text-white text-2xl font-bold">
                <Link href="/" className="text-slate-400 hover:opacity-80 transition-opacity">
                    <Image src={logo} width={50} height={50} />
                </Link>
            </div>

            {/* Mobile Menu */}
            <div className="md:hidden flex items-center">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" className="text-white p-2 rounded-lg">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <span className="mx-2">
                        <ModeToggle />
                    </span>
                    <SheetContent side="right" className="bg-slate-700 text-white">
                        <SheetHeader>
                            <SheetTitle className="text-xl font-semibold">BBlog</SheetTitle>
                            <SheetDescription>
                                <div className="flex flex-col items-center gap-5 mt-5">
                                    <Link
                                        href="/about"
                                        className="hover:scale-105 hover:font-semibold transition duration-300 ease-in-out"
                                    >
                                        About
                                    </Link>
                                    <div className="h-1" />
                                    <Link
                                        href="/blog"
                                        className="hover:scale-105 hover:font-semibold transition duration-300 ease-in-out"
                                    >
                                        Events
                                    </Link>
                                    <div className="h-1" />
                                    <Link
                                        href="/blog"
                                        className="hover:scale-105 hover:font-semibold transition duration-300 ease-in-out"
                                    >
                                        Shop
                                    </Link>
                                    <div className="h-1" />
                                    <div className="flex bottom-0">
                                        <LRBtn />
                                    </div>
                                </div>
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-4 items-center">
                <ModeToggle />
                <Links />
            </div>
        </nav>
    );
};

export default Navbar;
