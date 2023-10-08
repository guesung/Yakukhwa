"use client";

import Icon from "@/components/Icon";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MAINLINKLIST } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
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
          {MAINLINKLIST.map((mainLink) => (
            <div key={mainLink.mainTitle.name} className="w-full">
              <p
                className="text-title3 py-10"
                onClick={() => handleActiveTab(mainLink.mainTitle.name)}
              >
                {mainLink.mainTitle.name}
              </p>
              <AnimatePresence>
                {activeTab === mainLink.mainTitle.name && (
                  <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -200, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {mainLink.subTitle.map((subLink) => (
                      <div
                        key={subLink.name}
                        className="text-title4 py-10 bg-brand-3 h-full w-full"
                      >
                        {subLink.name}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </SheetContent>
      </Sheet>
    </section>
  );
}
