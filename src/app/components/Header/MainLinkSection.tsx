'use client';

import { MAINLINKLIST } from '@/constants';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/utils';
import { usePathname } from 'next/navigation';

export default function MainLinkSection() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsActive(false);
  }, [pathname]);
  return (
    <section
      className="sticky top-0 z-20 flex justify-center bg-white text-center"
      onMouseLeave={() => setIsActive(false)}
    >
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 300 }}
            exit={{ height: 0 }}
            className="absolute top-0 h-300 w-full bg-slate-50"
          />
        )}
      </AnimatePresence>

      {MAINLINKLIST.map((linkItem, index) => (
        <div key={index} className="z-20 flex">
          <Link
            href={
              linkItem.subTitle[0].outLink
                ? linkItem.subTitle[0].path
                : `/${linkItem.mainTitle.path}/${linkItem.subTitle[0].path}`
            }
            className="flex h-50 cursor-pointer items-center justify-center text-title4"
            onMouseEnter={() => setIsActive(true)}
          >
            {linkItem.mainTitle.name}
          </Link>
          {index < MAINLINKLIST.length - 1 && (
            <p className="inset-y-0 mx-20 flex items-center text-title4 text-gray-6">/</p>
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
                    className={cn('flex h-40 items-center justify-center text-center', {
                      'ml-25': index === 0,
                    })}
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
