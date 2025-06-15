import { ComponentPropsWithRef, ReactNode } from "react";
import BaseLink from "next/link";
import clsx from "clsx";


interface LinkProps extends ComponentPropsWithRef<'div'> {
  type?: "text" | "button",
  href: string
  label: string
  icon?: ReactNode
}

export default function Link(props: LinkProps ) {

  const {
    type = "text", href, icon, label,
    className,
    ...elementProps
  } = props

  const _class = clsx(
    "comp-link",
    className
  )

  return (
    <div className={_class} {...elementProps}>
      <span>{icon}</span>
      <BaseLink href={href}>
        <span>{label}</span>
      </BaseLink>
    </div>
  )
}
