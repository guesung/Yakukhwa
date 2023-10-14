import { SheetOverlay, SheetPortal } from './ui/sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

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
            className="fixed inset-0 z-50 m-auto flex items-center justify-center bg-black shadow-lg"
            onClick={() => setOpen(false)}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </SheetPrimitive.Content>
    </SheetPortal>
  );
}
