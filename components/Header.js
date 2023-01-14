import React from "react";
import Image from "next/image";
import {
  Bars2Icon,
  Bars3Icon,
  GlobeAmericasIcon,
  GlobeEuropeAfricaIcon,
  MagnifyingGlassCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import GlobeAltIcon from "@heroicons/react/24/solid";
import DocumentMinusIcon from "@heroicons/react/24/solid";
import UserCircleIcon from "@heroicons/react/24/solid";
import UsersIcon from "@heroicons/react/24/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div className="relative flex item-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle - Search*/}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <MagnifyingGlassCircleIcon
          className="hidden md:inline-flex h-8  bg-red-400 text-white 
         rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline">Become a host</p>
        <GlobeEuropeAfricaIcon className="h-6 cursor-pointer" />
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <Bars3Icon className="h-6" />
          <UserIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
