import { ComponentPropsWithRef } from "react";

export interface DrawerProps extends ComponentPropsWithRef<"div"> {
  open: boolean
  onOpenChange: (open: boolean) => void
  placement?: "left" | "right" | "top" | "bottom"
  contentClass?: string
}