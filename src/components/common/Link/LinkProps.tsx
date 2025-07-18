import { ComponentPropsWithRef, ReactNode } from "react";

export interface LinkProps extends ComponentPropsWithRef<"div"> {
  type?: "text" | "button";
  href: string;
  label: string;
  prefixIcon?: ReactNode;
  suffixIcon?: ReactNode;
}
