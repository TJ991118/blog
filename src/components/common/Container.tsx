import clsx from "clsx";
import { ComponentPropsWithRef } from "react";

import styles from "@/styles/components/common/container.module.scss"

interface ContainerProps extends ComponentPropsWithRef<'div'> {
  type?: "block" | "section" | "page"
}

export default function Container(props: ContainerProps) {

  const {
    type = "block", className,
    ...elementProps
  } = props

  const _class = clsx(
    styles["comp-container"],
    styles["container-type__" + type],
    className
  )

  return (
    <div className={_class} {...elementProps}>
    </div>
  )
}
