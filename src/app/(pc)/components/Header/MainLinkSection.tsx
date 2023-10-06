"use client";

import { MAINLINKLIST } from "@/constants";
import { useState } from "react";

export default function MainLinkSection() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="flex justify-center"
      onMouseLeave={() => setIsActive(false)}
    >
      {MAINLINKLIST.map((linkItem, index) => (
        <div key={index} className="flex flex-col w-120">
          <div onMouseEnter={() => setIsActive(true)}>{linkItem.mainTitle}</div>
          <ul>
            {isActive &&
              linkItem.subTitle.map((subTitle, i) => (
                <li key={i}>{subTitle}</li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
