import { ComponentPropsWithRef } from "react";

export interface ContainerProps extends ComponentPropsWithRef<"div"> {
  type?: "block" | "section" | "page";
}
