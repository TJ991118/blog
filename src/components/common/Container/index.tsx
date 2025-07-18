import clsx from "clsx";

import { capFirst } from "@/utils";
import styles from "./index.module.scss";
import { ContainerProps } from "./ContainerProps";

export default function Container(props: ContainerProps) {
  const { type = "block", className, ...elementProps } = props;

  const _class = clsx(
    styles["Container"],
    styles["ContainerType" + capFirst(type)],
    className
  );

  return <div className={_class} {...elementProps}></div>;
}
