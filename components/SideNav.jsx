import Link from "next/link";
import { PowerIcon } from "lucide-react";
import NavLinks from "@/app/admin/dashboard/navlinks";
import IRCLogo from "@/constants/Logo";

const SideNav = () => {
  return (
    <div className="flex h-full flex-col py-4 md:px-2">
      <Link
        className="mb-2 flex h-30 items-end justify-start rounded-md bg-neutral-900 p-5 md:h-44 overflow-hidden"
        href="/"
      >
        <div className="flex w-32 md:w-40 gap-7 text-2xl justify-center items-center font-convergence">
          <IRCLogo height={70} width={70} />
          <h1>IRC</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-neutral-900 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-neutral-900 p-3 text-sm font-medium hover:bg-neutral-800 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SideNav;
