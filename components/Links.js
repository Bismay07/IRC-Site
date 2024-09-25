import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LRBtn from "./login-register";

const Links = () => {
    return (
        <div className="flex items-center gap-2">
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

            <div className="flex space-x-2">
                <LRBtn />
            </div>
        </div>
    );
};

export default Links;
