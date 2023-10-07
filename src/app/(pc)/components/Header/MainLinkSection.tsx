"use client";

import { MAINLINKLIST } from "@/constants";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainLinkSection() {
  const [isActive, setIsActive] = useState(false);
  return (
    <section
      className="flex justify-center sticky z-20 top-0 bg-white text-center"
      onMouseLeave={() => setIsActive(false)}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 300 }}
            exit={{ height: 0 }}
            className="absolute bg-slate-50 h-300 top-0 w-full"
          />
        )}
      </AnimatePresence>

      {MAINLINKLIST.map((linkItem, index) => (
        <div key={index} className="flex flex-col w-130">
          <div
            className="flex items-center h-50 justify-center z-20 cursor-pointer"
            onMouseEnter={() => setIsActive(true)}
          >
            {linkItem.mainTitle.name}
          </div>
          {index > 0 && (
            <p className="absolute inset-y-0 flex items-center text-gray-6 text-subtitle1">
              /
            </p>
          )}
          <AnimatePresence>
            {isActive && (
              <motion.ul
                className="absolute top-50 flex flex-col"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {linkItem.subTitle.map((subTitle, i) => (
                  <Link
                    key={i}
                    className="w-100 flex justify-center h-30 items-center"
                    href={`/${linkItem.mainTitle.path}/${subTitle.path}`}
                  >
                    {subTitle.name}
                  </Link>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
