"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Link from "next/link";

const SwiperType1 = ({ item }) => {
  return (
    <SwiperSlide className="!w-80 font-Poppins">
      <div className="w-80 h-[645px] p-5 flex flex-col items-start justify-between bg-white">
        <img src={item.images} />
        <div className="w-full h-full flex items-start justify-center mt-8">
          <div
            className={`w-full h-full flex items-center flex-col ${
              item.type === 0 ? "justify-around" : "justify-center"
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
            <span className="font-Poppins text-center">{item.content}</span>
            <span className="text-sm font-Poppins text-center">
              {item.date}
            </span>
            <Link
              href="/"
              className="px-5 py-2 border-[2px] border-black font-light rounded-full"
            >
              GÖRÜNTÜLE
            </Link>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default SwiperType1;
