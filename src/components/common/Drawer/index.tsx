"use client"

import { FC } from "react";

import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./index.module.scss"
import { DrawerProps } from "./DrawerProps";
import clsx from "clsx";

const Drawer: FC<DrawerProps> = (props) => {

  const {
    open,
    children,
    className,
    onOpenChange,
    ...elementProps
  } = props

  const handleClose = () => {
    if (onOpenChange) {
      onOpenChange(false);
    }
  }

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
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
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