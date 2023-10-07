"use client";

import { MAINLINKLIST } from "@/constants";
import Link from "next/link";
import { useState } from "react";

export default function MainLinkSection() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="flex justify-center sticky z-20 top-0 bg-white text-center"
      onMouseLeave={() => setIsActive(false)}
    >
      {isActive && <div className="absolute bg-slate-50 h-300 top-0 w-full" />}
      {MAINLINKLIST.map((linkItem, index) => (
        <div key={index} className="flex flex-col w-120">
          <div
            className="flex items-center h-50 w-100 justify-center z-20 cursor-pointer"
            onMouseEnter={() => setIsActive(true)}
          >
            {linkItem.mainTitle.name}
          </div>
          {isActive && (
            <ul className="absolute top-50 flex flex-col">
              {linkItem.subTitle.map((subTitle, i) => (
                <Link
                  key={i}
                  className="w-100 flex justify-center h-30 items-center"
                  href={`/${linkItem.mainTitle.path}/${subTitle.path}`}
                >
                  {subTitle.name}
                </Link>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
