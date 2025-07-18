"use client"

import clsx from "clsx";
import { FC, useMemo } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./index.module.scss"
import { DrawerProps } from "./DrawerProps";

const Drawer: FC<DrawerProps> = (props) => {

  const {
    open,
    placement = "left",
    className,
    children,
    onOpenChange,
    ...elementProps
  } = props

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  }

  const contentVariant = useMemo(() => {
    switch (placement) {
      case "left":
        return { hidden: { x: "-100%" }, visible: { x: 0 } };
      case "right":
        return { hidden: { x: "100%" }, visible: { x: 0 } };
      case "top":
        return { hidden: { y: "-100%" }, visible: { y: 0 } };
      case "bottom":
        return { hidden: { y: "100%" }, visible: { y: 0 } };
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

  return createPortal(
    <AnimatePresence>
      {
        open && (
          <div className={clsx(styles["DrawerContainer"], className)} {...elementProps}>
            <motion.div
              className={styles["DrawerMask"]}
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(5px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              transition={{ duration: .3 }}
              onClick={handleClose}
            />
            <motion.div
              className={styles["DrawerContent"]}
              style={_styles}
              initial={contentVariant.hidden}
              animate={contentVariant.visible}
              exit={contentVariant.hidden}
              transition={{ type: 'tween', duration: 0.3 }}
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