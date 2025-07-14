import { ComponentPropsWithRef } from "react";

export interface DrawerProps extends ComponentPropsWithRef<"div"> {
  open: boolean
  onOpenChange: (open: boolean) => void
}