'use client';

import { MAIN_LINK_LIST } from '@/constants';
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

      {MAIN_LINK_LIST.map((linkItem, index) => (
        <div key={index} className="z-20 flex">
          <Link
            href={
              linkItem.subTitle[0].type === 'outLink'
                ? linkItem.subTitle[0].path
                : `/${linkItem.mainTitle.path}/${linkItem.subTitle[0].path}?page=1`
            }
            className={cn('flex h-50 w-80 cursor-pointer items-center justify-center text-title4', {
              'w-120': linkItem.mainTitle.name.length > 5,
            })}
            onMouseEnter={() => setIsActive(true)}
          >
            {linkItem.mainTitle.name}
          </Link>
          {index < MAIN_LINK_LIST.length - 1 && (
            <p className="inset-y-0 flex w-40 items-center justify-center text-title4 text-gray-6">
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
                  <div className="flex" key={i}>
                    <Link
                      className={cn('flex h-40 w-80 items-center justify-center text-center', {
                        'w-120': linkItem.mainTitle.name.length > 5,
                      })}
                      href={
                        subTitle.type === 'outLink'
                          ? subTitle.path
                          : `/${linkItem.mainTitle.path}/${subTitle.path}?page=1`
                      }
                    >
                      {subTitle.name}
                    </Link>
                    <div className="w-40" />
                  </div>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      ))}
    </section>
  );
}
