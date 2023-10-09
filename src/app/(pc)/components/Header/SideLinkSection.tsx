"use client";

import Icon from "@/components/Icon";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MAINLINKLIST } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function SideLinkSection() {
  const [activeTab, setActiveTab] = useState("");
  const handleActiveTab = (name: string) => {
    if (activeTab === name) {
      setActiveTab("");
    } else {
      setActiveTab(name);
    }
  };

  return (
    <section className="absolute right-10 top-10">
      <Sheet>
        <SheetTrigger asChild>
          <Icon id="menu" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center py-80 text-center">
          {MAINLINKLIST.map((linkItem) => (
            <div key={linkItem.mainTitle.name} className="w-full">
              <p
                className="text-title3 py-10"
                onClick={() => handleActiveTab(linkItem.mainTitle.name)}
              >
                {linkItem.mainTitle.name}
              </p>
              {activeTab === linkItem.mainTitle.name && (
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
              )}
            </div>
          ))}
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetContent>
      </Sheet>
    </section>
  );
}
