import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center relative lg:before:absolute lg:before:w-[600px] lg:before:h-[600px] lg:before:bg-cover lg:before:-top-[34rem] lg:before:-right-80 lg:before:-z-10 lg:before:bg-[url('/images/bg-image.svg')] 
    lg:before:content-[''] lg:after:absolute lg:after:w-[600px] lg:after:h-[600px] lg:after:bg-cover lg:after:-bottom-[25rem] lg:after:-left-80 lg:after:-z-10 lg:after:bg-[url('/images/bg-image.svg')] lg:after:content-['']">
      <div className="w-full flex items-center justify-center flex-col sm:space-y-5 before:w-[800px] before:h-[800px] before:content[''] before:absolute before:bg-cover before:-z-10 before:bg-[url('/images/bg-image.svg')] before:bottom-10">
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
