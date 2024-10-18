"use client";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CalendarIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  {
    name: "Home",
    href: "/admin/dashboard",
    icon: HomeIcon,
  },
  {
    name: "Members",
    href: "/admin/dashboard/members",
    icon: UserGroupIcon,
  },
  {
    name: "Events",
    href: "/admin/dashboard/events",
    icon: CalendarIcon,
  },
  {
    name: "Transaction",
    href: "/admin/dashboard/transaction",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "Gallery",
    href: "/admin/dashboard/gallery",
    icon: PhotoIcon,
  },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md ${
              pathname === link.href
                ? "bg-gray-950 text-blue-600"
                : "bg-neutral-900"
            } p-3 text-sm font-medium hover:bg-neutral-800 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3`}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
