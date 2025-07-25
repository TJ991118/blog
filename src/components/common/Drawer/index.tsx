'use client';

import clsx from "clsx";
import { FC, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./index.module.scss"
import { DrawerProps } from "./DrawerProps";

const Drawer: FC<DrawerProps> = (props) => {

  const {
    open,
    placement = "left",
    children,
    className,
    contentClass,
    onOpenChange,
    ...elementProps
  } = props



  const contentVariant = useMemo(() => {
    switch (placement) {
      case "left":
        return { hidden: { x: "-100%", opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "right":
        return { hidden: { x: "100%", opacity: 0 }, visible: { x: 0, opacity: 1 } };
      case "top":
        return { hidden: { y: "-100%", opacity: 0 }, visible: { y: 0, opacity: 1 } };
      case "bottom":
        return { hidden: { y: "100%", opacity: 0 }, visible: { y: 0, opacity: 1 } };
    }
  }, [placement])
  const _styles = useMemo(() => {
    switch (placement) {
      case "left":
        return { top: 0, left: 0, height: "100%", minWidth: "20%" };
      case "right":
        return { top: 0, right: 0, height: "100%", minWidth: "20%" };
      case "top":
        return { top: 0, width: "100%", minHeight: "20%" };
      case "bottom":
        return { bottom: 0, width: "100%", minHeight: "20%" };
    }
  }, [placement])

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {
        open && (
          <div className={clsx(styles["DrawerContainer"], className)} {...elementProps}>
            <motion.div
              className={styles["DrawerMask"]}
              initial={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)" }}
              animate={{ backdropFilter: "blur(5px)", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              exit={{ backdropFilter: "blur(0px)", backgroundColor: "rgba(0, 0, 0, 0)" }}
              transition={{ type: "tween", duration: 0.4 }}
              onClick={handleClose}
            />
            <motion.div
              className={clsx(styles["DrawerContent"], contentClass)}
              style={_styles}
              initial={contentVariant.hidden}
              animate={contentVariant.visible}
              exit={contentVariant.hidden}
              // transition={{ type: "spring", damping: 30, stiffness: 250 }}
              transition={{
                type: 'keyframes',
                ease: [0.33, 1, 0.68, 1],
                duration: 0.4,
              }}
            >
              {children}
            </motion.div>
          </div>
        )
      }
    </AnimatePresence>,
    document.body
  );
}

export default Drawer;