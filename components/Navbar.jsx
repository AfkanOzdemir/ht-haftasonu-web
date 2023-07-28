import React from "react";
import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <navbar className="z-50">
      <div className="w-full h-[20vh] flex items-center justify-between top-0 px-8">
        <div className="relative w-full h-full">
          <div className="w-64 h-full bg-white p-3 pl-8 rounded-b-full flex items-center justify-center absolute -top-10 -left-20">
            <Link href="/">
              <Image
                src="/images/logo/ht-haftasonu-black.svg"
                alt="Logo"
                width={125}
                height={125}
              />
            </Link>
          </div>
        </div>
        <div className="w-6 h-6 cursor-pointer">
          <Image
            alt="Menu"
            src="/images/icons/menu.svg" width={150} height={150} />
        </div>
      </div>
    </navbar>
  );
};

export default Navbar;
