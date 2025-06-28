import clsx from "clsx";
import BaseLink from "next/link";
import { ComponentPropsWithRef, ReactNode } from "react";

import styles from "@/styles/components/common/link.module.scss"


interface LinkProps extends ComponentPropsWithRef<'div'> {
  type?: "text" | "button",
  href: string
  label: string
  prefixIcon?: ReactNode
  suffixIcon?: ReactNode
}

export default function Link(props: LinkProps) {

  const {
    type = "text",
    label,
    href,
    prefixIcon,
    suffixIcon,
    className,
    ...elementProps
  } = props

  const _class = clsx(
    styles["comp-link"],
    styles[`link-type__${type}`],
    className
  )

  return (
    <div className={_class} {...elementProps}>
      {prefixIcon && <span className={clsx(styles["link-icon"], styles["link-icon-prefix"])}>{prefixIcon}</span>}
      <BaseLink className={styles["link-content"]} href={href}>
        <span>{label}</span>
      </BaseLink>
      {suffixIcon && <span className={clsx(styles["link-icon"], styles["link-icon-suffix"])}>{suffixIcon}</span>}
    </div>
  )
}
