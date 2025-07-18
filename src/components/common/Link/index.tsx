import clsx from "clsx";
import BaseLink from "next/link";

import styles from "./index.module.scss";
import { LinkProps } from "./LinkProps";
import { capFirst } from "@/utils";

export default function Link(props: LinkProps) {
  const {
    type = "text",
    label,
    href,
    prefixIcon,
    suffixIcon,
    className,
    ...elementProps
  } = props;

  const _class = clsx(
    styles["Link"],
    styles[`LinkType${capFirst(type)}`],
    className
  );

  return (
    <div className={_class} {...elementProps}>
      {prefixIcon && (
        <span className={clsx(styles["link-icon"], styles["link-icon-prefix"])}>
          {prefixIcon}
        </span>
      )}
      <BaseLink className={styles["link-content"]} href={href}>
        <span>{label}</span>
      </BaseLink>
      {suffixIcon && (
        <span className={clsx(styles["link-icon"], styles["link-icon-suffix"])}>
          {suffixIcon}
        </span>
      )}
    </div>
  );
}
