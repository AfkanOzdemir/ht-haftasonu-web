"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Api from "@/api/data.json";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full h-full overflow-hidden flex items-center justify-center px-5 relative z-10 after:absolute after:w-4/5 after:h-[400px] sm:after:w-[700px] sm:after:h-[700px] lg:after:w-[600px] lg:after:h-[600px] after:bg-cover after:bottom-0 lg:after:-bottom-[25rem]
    after:right-0 after:my-auto after:left-0 after:top-0 lg:after:left-auto lg:after:top-auto after:mx-auto lg:after:my-0 lg:after:mx-0 lg:after:-right-60 after:-z-10 after:bg-[url('/images/bg-image.svg')] after:content-[''] after:bg-center">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {Api.map((item, index) => {
          if (item.type === 0 || item.type === 2) {
            return (
              <SwiperSlide key={index} className="!w-72 sm:!w-80 font-Poppins flex items-center justify-center">
                <div
                  className="w-full !h-[600px] p-5 flex flex-col items-start justify-between bg-white
                before:content-[''] before:w-12 before:h-[2px] before:bg-secondary before:absolute before:bottom-1/2 before:-left-[2rem] before:z-10
                after:content-[''] after:w-12 after:h-[2px] after:bg-secondary after:absolute after:bottom-1/2 after:-right-[2rem] after:z-10
                ">
                  <img src={item.images} />
                  <div className="w-full h-full flex items-start justify-center mt-8">
                    <div
                      className={`w-full h-full flex items-center flex-col ${item.type === 0 ? "justify-around" : "justify-center"
                        } ${item.type == 0 ? "" : "space-y-5"}`}
                    >
                      <span className="text-sm font-Poppins text-center">
                        {item.name}
                      </span>
                      <hr className="w-1/3" />
                      <span className="text-xl font-Poppins font-bold text-center">
                        {item.header}
                      </span>
                      <hr className="w-2/3" />
                      <span className="font-Poppins text-center">
                        {item.content}
                      </span>
                      <span className="text-sm font-Poppins text-center">
                        {item.date}
                      </span>
                      <Link href="/" className="px-5 py-2 border-[2px] border-black font-light rounded-full">
                        GÖRÜNTÜLE
                      </Link>
                    </div>
                  </div>
                </div>
                <span className="w-full flex items-center justify-center absolute -bottom-11 !font-Playfair text-7xl -z-10">
                  {index + 1 < 10 ? "0" + index : index}
                </span>
              </SwiperSlide>
            );
          } else if (item.type === 1) {
            return (
              <SwiperSlide
                key={index}
                className="!w-72 sm:!w-80 font-Poppins !flex !items-center !justify-center
                before:content-[''] before:w-12 before:h-[2px] before:bg-secondary before:absolute before:bottom-1/2 before:-left-[2rem] before:z-10
                after:content-[''] after:w-12 after:h-[2px] after:bg-secondary after:absolute after:bottom-1/2 after:-right-[2rem] after:z-10
                "
              >
                <div
                  className="w-11/12 !h-[600px] p-5 flex flex-col items-center justify-between relative
                    after:w-full after:h-3/4 after:absolute after:bottom-0 after:left-0 after:bg-gradient-to-t after:from-black after:to-transparent after:z-10"
                >
                  <img
                    src={item.images}
                    className="w-full h-full object-cover absolute top-0 left-0"
                  />
                  <div className="w-full h-full flex flex-col items-end justify-end text-white z-40 relative">
                    <div className="w-full h-full flex items-center justify-center absolute">
                      <div
                        className="w-20 h-20 rounded-full border-white border-4 absolute
                     bg-black bg-opacity-50 flex items-center justify-center cursor-pointer pl-1 z-10"
                      >
                        <img src="/images/icons/play-button.svg" />
                      </div>
                    </div>
                    <div className="w-full h-48 flex flex-col items-center justify-around z-20">
                      <div className="w-full h-full flex items-center justify-around flex-col space-y-2">
                        <span className="text-sm font-Poppins text-center">
                          {item.name}
                        </span>
                        <hr className="w-1/3" />
                        <span className="text-xl font-Poppins font-bold text-center">
                          {item.header}
                        </span>
                        <hr className="w-2/3" />
                        <span className="font-Poppins text-center">
                          {item.content}
                        </span>
                        <span className="text-sm font-Poppins text-center">
                          {item.date}
                        </span>
                        <Link
                          href="/"
                          className="px-5 py-2 border-[2px] border-white font-light rounded-full"
                        >
                          GÖRÜNTÜLE
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="w-full flex items-center justify-center absolute -bottom-11 !font-Playfair text-7xl -z-10">
                  {index + 1 < 10 ? "0" + index : index + 1}
                </span>
              </SwiperSlide>
            );
          } else if (item.type === 3 || item.type === 5) {
            return (
              <SwiperSlide
                key={index}
                className="!w-72 sm:!w-80 !h-[600px] font-Playfair !flex !items-center !justify-center flex-col
                before:content-[''] before:w-12 before:h-[2px] before:bg-secondary before:absolute before:bottom-1/2 before:-left-[2rem] before:z-10
                after:content-[''] after:w-12 after:h-[2px] after:bg-secondary after:absolute after:bottom-1/2 after:-right-[2rem] after:z-10">
                <div className="w-11/12 h-full p-5 flex flex-col items-center justify-between bg-white font-extrabold">
                  <img
                    src={item.images[0]}
                    className={`h-64 object-cover ${item.type === 5 ? "h-full w-full" : ""
                      }`}
                  />
                  <h3 className={`${item.type === 5 ? "hidden" : ""}`}>
                    REKLAM
                  </h3>
                  <img
                    src={item.images[1]}
                    className={`h-64 object-cover ${item.type === 5 ? "hidden" : ""
                      }`}
                  />
                </div>
                <span className="w-full flex items-center justify-center absolute -bottom-11 text-7xl -z-50">
                  {index + 1 < 10 ? "0" + index : index + 1}
                </span>
              </SwiperSlide>
            );
          } else if (item.type === 4 || item.type === 6) {
            return (
              <SwiperSlide
                key={index}
                className={`${item.type === 4 ? "!w-[75%]" : "!w-72 sm:!w-80"
                  } !min-w-[320px] !h-[600px] font-Poppins relative flex items-center justify-center
                  before:content-[''] before:w-12 before:h-[2px] before:bg-secondary before:absolute before:bottom-1/2 before:-left-[2rem] before:z-10
                  after:content-[''] after:w-12 after:h-[2px] after:bg-secondary after:absolute after:bottom-1/2 after:-right-[2rem] after:z-10
                `}>
                <div className="w-full h-full after:w-full after:h-3/4 after:absolute after:bottom-0 after:left-0
                after:bg-gradient-to-t after:from-black after:to-transparent after:z-10">
                  <div className="w-full h-full p-5 flex flex-col items-center justify-end relative ">
                    <img
                      src={item.images}
                      className="w-full h-full object-cover absolute bottom-0 left-0 -z-10"
                    />
                    <div
                      className={`w-full h-full flex items-center justify-end space-y-3 text-white flex-col z-20`}
                    >
                      <span className="text-sm font-Poppins text-center">
                        {item.name}
                      </span>
                      <hr className="w-1/5" />
                      <span className="text-xl font-Poppins font-bold text-center">
                        {item.header}
                      </span>
                      <Link
                        href="/"
                        className="px-5 py-2 border-[2px] border-white font-light rounded-full"
                      >
                        GÖRÜNTÜLE
                      </Link>
                    </div>
                  </div>
                </div>

                <span className="w-full flex items-center justify-center absolute -bottom-11 !font-Playfair text-7xl -z-10">
                  {index + 1 < 10 ? "0" + index : index + 1}
                </span>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </div>
  );
};

export default page;
