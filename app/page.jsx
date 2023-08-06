import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-center relative sm:space-y-5 
    before:w-full before:h-full before:bg-contain before:content[''] before:absolute before:bg-no-repeat before:bg-center
    before:-z-50 before:bg-[url('/images/bg-image.svg')]">
      <div className="w-full flex items-center justify-center flex-col space-y-2 sm:space-y-0 2xl:space-y-5">
        <div className="w-3/4 h-auto z-10 flex flex-col items-center lg:justify-center space-y-5 lg:space-y-10" >
          <img src="/images/main-text.png" className="hidden md:flex " />
          <img src="/images/main-text-small.png" className="w-full lg:w-auto flex justify-start md:hidden " />
          <div className="z-10 space-x-3 w-full flex items-center justify-start md:justify-center">
            <Link href={"/ListPage"} className="border-secondary border-2 text-black px-5 py-1 lg:px-8 lg:py-3 rounded-full cursor-pointer">
              <span className="text-base md:text-2xl font-Playfair font-extrabold">
                görüntüle
              </span>
            </Link>
            <Link href={"/ListPage"} className="border-secondary border-2 text-black px-2 py-3 lg:px-4 lg:py-5 flex items-center justify-center rounded-full cursor-pointer">
              <Image src="/images/icons/right-arrow.svg" alt='Right Arrow' width={20} height={20} />
            </Link>
          </div>
        </div>
        <Link href={"/ListPage"} className="w-20 h-20 z-10 absolute -right-10 bg-secondary my-auto hidden lg:flex items-center justify-start rotate-45">
          <Image src="/images/icons/right-arrow.svg" alt='Right Arrow' width={20} height={20} className="-rotate-45 absolute left-4 bottom-5" />
        </Link>
        <div className="w-full h-full absolute before:2xl:w-[500px] before:2xl:h-[500px] before:bg-contain before:content[''] before:absolute before:bg-no-repeat before:bg-center before:-z-50 before:-bottom-72 before:-left-52 before:bg-[url('/images/bg-image.svg')]
        after:2xl:w-[500px] after:2xl:h-[500px] after:bg-contain after:content[''] after:absolute after:bg-no-repeat after:bg-center after:-z-50 after:-top-72 after:-right-52 after:bg-[url('/images/bg-image.svg')]
        " />
      </div>
    </div>
  );
}
