import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-center relative sm:space-y-5 before:w-full before:h-full before:bg-contain before:content[''] before:absolute before:bg-no-repeat before:bg-center before:-z-10 before:bg-[url('/images/bg-image.svg')]">
      <div className="w-full flex items-center justify-center flex-col">
        <div className="w-3/4 h-60 z-10 before:w-3/4 before:h-60 before:content-[''] before:bg-[url('/images/main-text-small.png')] lg:before:bg-[url('/images/main-text.png')] before:absolute before:my-auto before:bg-no-repeat before:bg-contain before:bg-center"/>
        <div className="z-10 space-x-3 w-full flex items-center justify-center ">
          <Link href={"/swiperPage"} className="border-secondary border-2 text-black px-8 py-3 rounded-full cursor-pointer">
            <span className="text-2xl font-Playfair font-extrabold">
              görüntüle
            </span>
          </Link>
          <Link href={"/swiperPage"} className="border-secondary border-2 text-black w-14 h-14 flex items-center justify-center rounded-full cursor-pointer">
            <Image src="/images/icons/right-arrow.svg" alt='Right Arrow' width={20} height={20} />
          </Link>
        </div>
        <Link href={"/swiperPage"} className="w-20 h-20 absolute -right-10 bg-secondary my-auto hidden lg:flex items-center justify-start rotate-45">
          <Image src="/images/icons/right-arrow.svg" alt='Right Arrow' width={20} height={20} className="-rotate-45 absolute left-4 bottom-5" />
        </Link>
      </div>
    </div>
  );
}
