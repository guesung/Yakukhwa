'use client';

import Icon from '@/components/Icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { MAINLINKLIST } from '@/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SideLinkSection() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <section className="absolute right-10 top-10">
      <Sheet open={open}>
        <SheetTrigger asChild onClick={() => setOpen(true)}>
          <Icon id="menu" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center py-80 text-center" setOpen={setOpen}>
          <Accordion type="single" collapsible className="w-full">
            {MAINLINKLIST.map((linkItem) => (
              <AccordionItem
                key={linkItem.mainTitle.name}
                className="w-full border-y border-gray-2"
                value={linkItem.mainTitle.name}
              >
                <AccordionTrigger className="w-full py-10 text-title3">
                  {linkItem.mainTitle.name}
                </AccordionTrigger>
                {linkItem.subTitle.map((subTitle) => (
                  <AccordionContent key={subTitle.name}>
                    <Link
                      className="block h-full w-full border-y border-gray-2 bg-brand-3 py-10 text-title4 text-white"
                      href={`/${linkItem.mainTitle.path}/${subTitle.path}?page=1`}
                    >
                      {subTitle.name}
                    </Link>
                  </AccordionContent>
                ))}
              </AccordionItem>
            ))}
          </Accordion>
        </SheetContent>
      </Sheet>
    </section>
  );
}
