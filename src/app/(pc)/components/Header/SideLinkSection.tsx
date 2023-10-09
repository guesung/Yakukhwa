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
          {MAINLINKLIST.map((linkItem) => (
            <div key={linkItem.mainTitle.name} className="w-full">
              <p className="text-title3 py-10">{linkItem.mainTitle.name}</p>
              <div>
                {linkItem.subTitle.map((subTitle) => (
                  <Link
                    key={subTitle.name}
                    className="text-title4 py-10 bg-brand-3 h-full w-full block"
                    href={`/${linkItem.mainTitle.path}/${subTitle.path}`}
                  >
                    {subTitle.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it styled?</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Is it animated?</AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SheetContent>
      </Sheet>
    </section>
  );
}
