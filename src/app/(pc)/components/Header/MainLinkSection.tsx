"use client";

import { MAINLINKLIST } from "@/constants";
import { cn } from "@/utils/cn";
import { useState } from "react";

export default function MainLinkSection() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="flex justify-center sticky z-[20] top-0 bg-white text-center"
      onMouseLeave={() => setIsActive(false)}
    >
      {MAINLINKLIST.map((linkItem, index) => (
        <div key={index} className="flex flex-col w-120">
          <div
            className="flex items-center h-50 w-100 justify-center"
            onMouseEnter={() => setIsActive(true)}
          >
            {linkItem.mainTitle}
          </div>
          {isActive && (
            <ul className="absolute top-50 flex flex-col ">
              {linkItem.subTitle.map((subTitle, i) => (
                <li
                  key={i}
                  className="w-100 flex justify-center h-30 items-center"
                >
                  {subTitle}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </section>
  );
}
