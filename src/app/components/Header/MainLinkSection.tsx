"use client";

import { MAINLINKLIST } from "@/constants";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils";
import { usePathname } from "next/navigation";

export default function MainLinkSection() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);
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
        <div key={index} className="flex z-20">
          <Link
            href={
              linkItem.subTitle[0].outLink
                ? linkItem.subTitle[0].path
                : `/${linkItem.mainTitle.path}/${linkItem.subTitle[0].path}`
            }
            className="flex items-center h-50 justify-center cursor-pointer text-title4"
            onMouseEnter={() => setIsActive(true)}
          >
            {linkItem.mainTitle.name}
          </Link>
          {index < MAINLINKLIST.length - 1 && (
            <p className="inset-y-0 flex mx-20 items-center text-gray-6 text-title4">
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
                    className={cn(
                      "flex text-center justify-center h-40 items-center",
                      { "ml-25": index === 0 }
                    )}
                    href={
                      subTitle.outLink
                        ? subTitle.path
                        : `/${linkItem.mainTitle.path}/${subTitle.path}`
                    }
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
