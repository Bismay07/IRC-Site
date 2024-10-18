import { cn } from "@/lib/utils";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import {
  UserGroupIcon,
  DocumentDuplicateIcon,
  CalendarIcon,
  PhotoIcon,
} from "@heroicons/react/24/outline";

export const HoverEffect = ({ className }) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);
  const items = [
    {
      title: "Add Member",
      icon: UserGroupIcon,
      link: "/admin/dashboard/members",
    },
    {
      title: "Update Events",
      icon: CalendarIcon,
      link: "/admin/dashboard/events",
    },
    {
      title: "Make Transaction",
      icon: DocumentDuplicateIcon,
      link: "/admin/dashboard/transaction",
    },
    {
      title: "Add Image",
      icon: PhotoIcon,
      link: "/admin/dashboard/gallery",
    },
  ];
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 py-10", className)}>
      {items.map((item, idx) => {
        const LinkIcon = item.icon;
        return (
          <Link
            href={item?.link}
            key={item?.link}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className={`flex items-end`}>
              <LinkIcon className="w-6" />
              <CardTitle>{item.title}</CardTitle>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-[300px] w-[300px] p-4 overflow-hidden bg-neutral-900 group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
// export const CardDescription = ({
//   className,
//   children
// }) => {
//   return (
//     (<p
//       className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
//       {children}
//     </p>)
//   );
// };
