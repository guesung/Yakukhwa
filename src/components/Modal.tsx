import { PropsWithChildren } from "react";
import { SheetOverlay, SheetPortal } from "./ui/sheet";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";

interface ModalProps extends PropsWithChildren {
  setOpen: (open: boolean) => void;
}
export default function Modal({ children, setOpen, ...props }: ModalProps) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content {...props}>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-50 shadow-lg m-auto inset-0 flex justify-center items-center bg-black"
            onClick={() => setOpen(false)}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}
