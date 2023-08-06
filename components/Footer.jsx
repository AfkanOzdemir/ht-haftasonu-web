import React from "react";

const Footer = () => {
  return (
    <footer
      className="w-full h-[5vh] px-8 flex items-center absolute bottom-0 -z-40
      justify-center lg:justify-between font-Poppins font-semibold text-xs text-black text-center">
      <span className="flex items-center justify-center ">
        Copyright © 2020 - Tüm hakları saklıdır. Habertürk Gazetecilik A.Ş.
      </span>
      <span className="hidden lg:flex items-center justify-center">
        Üretim ve Tasarım Bilgi Grubu
        <img src="/images/logo/logo-black.svg" className="pb-3 mx-2" />
        Bilgi Grubu
      </span>
    </footer>
  );
};

export default Footer;
