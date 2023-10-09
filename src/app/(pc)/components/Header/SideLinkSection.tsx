"use client";

import Icon from "@/components/Icon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MAINLINKLIST } from "@/constants";
import Link from "next/link";

export default function SideLinkSection() {
  return (
    <section className="absolute right-10 top-10">
      <Sheet>
        <SheetTrigger asChild>
          <Icon id="menu" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center py-80 text-center">
          <Accordion type="single" collapsible className="w-full">
            {MAINLINKLIST.map((linkItem) => (
              <AccordionItem
                key={linkItem.mainTitle.name}
                className="w-full border-y border-gray-2"
                value={linkItem.mainTitle.name}
              >
                <AccordionTrigger className="text-title3 py-10 w-full">
                  {linkItem.mainTitle.name}
                </AccordionTrigger>
                <div>
                  {linkItem.subTitle.map((subTitle) => (
                    <AccordionContent key={subTitle.name}>
                      <Link
                        className="text-title4 py-10 bg-brand-3 text-white border-y border-gray-2 h-full w-full block"
                        href={`/${linkItem.mainTitle.path}/${subTitle.path}`}
                      >
                        {subTitle.name}
                      </Link>
                    </AccordionContent>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </SheetContent>
      </Sheet>
    </section>
  );
}
