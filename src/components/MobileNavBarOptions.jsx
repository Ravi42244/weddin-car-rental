import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "./ui/button";
import {
  Home,
  LogOutIcon,
  Menu,
  SettingsIcon,
  TrendingUpIcon,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaHeart } from "react-icons/Fa";

const top_pick_option = [
  { label: "Home", href: "/cars-page", icon: Home, color: "text-yellow-700" },
  {
    label: "Top Picks",
    href: "/cars-page/top-picks",
    icon: TrendingUpIcon,
    color: "text-yellow-700",
  },
  {
    label: "Favourites",
    href: "/cars-page/favourite-cars",
    icon: FaHeart,
    color: "text-red-500",
  },
];

const accountRoutes = [
  {
    label: "Account Setting",
    icon: SettingsIcon,
    href: "/account-setting",
    color: "text-grey-500",
  },
];

function MobileNavBarOptions() {
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center lg:hidden" >
      
          <Menu />
       
      </SheetTrigger>
      <SheetContent side="left">
      <div className="-m-6">
          <div className="space-y-4 py-4 flex flex-col h-screen bg-yellow-400 text-white">
            <div className="px-3 py-2 flex-1">
              <Link href="/" className="flex items-center pl-3 mb-14 ">
                <div className="relative w-8 h-8 mr-4">
                  <Image sizes="fill" fill alt="logo" src="/logo.png" />
                </div>
                <h1 className="text-xl text-black font-bold">
                  Wedding rental cars
                </h1>
              </Link>
              <div className="space-y-1">
                {top_pick_option.map((option) => (
                  <Link
                    href={option.href}
                    key={option.href}
                    className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-yellow-500 rounded-lg transition"
                  >
                    <div className="flex items-center flex-1">
                      <option.icon
                        className={cn("h-5 w-5 mr-3", option.color)}
                      />
                      {option.label}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Logout and Account Setting */}
            <div className="px-3 py-2 items-end">
              <div className="space-y-1">
                {accountRoutes.map((accountRoute) => (
                  <Link
                    href={accountRoute.href}
                    key={accountRoute.href}
                    className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-yellow-500 rounded-lg transition"
                  >
                    <div className="flex items-center flex-1">
                      <accountRoute.icon
                        className={cn("h-5 w-5 mr-3", accountRoute.color)}
                      />
                      {accountRoute.label}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="space-y-1">
                <div className="text-sm group flex p-3 w-full justify-start font-medium cursor-pointer text-zinc-400 hover:text-white hover:bg-red-900 rounded-lg transition">
                  <div className="flex items-center flex-1" onClick={() => {}}>
                    <LogOutIcon
                      className={cn(
                        "h-5 w-5 mr-3",
                        "text-red-700 group-hover:text-white"
                      )}
                    />
                    <span className="text-yellow-700 group-hover:text-white">
                      Logout
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNavBarOptions;
