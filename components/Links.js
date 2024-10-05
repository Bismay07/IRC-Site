import React from "react";
import Link from "next/link";


import LRBtn from "./login-register";
import { links } from "@/constants";

const Links = () => {
    return (
        <div className="flex items-center gap-2">
            {links.map((link, index) => {
                return <Link
                    key={index}
                    href={link.url}
                    className="hover:scale-x-110 hover:font-semibold transition duration-300 ease-in dark:text-white text-black"
                >
                    {link.name}
                </Link>
            })}

            <div className="flex space-x-2">
                <LRBtn />
            </div>
        </div>
    );
};

export default Links;
