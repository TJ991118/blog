"use client"

import { useState } from "react";

import Drawer from "@/components/common/Drawer";

export default function Home() {

  const [open, setOpen] = useState(true)

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Drawer open={open} onOpenChange={(isOpen) => { setOpen(isOpen) }}>
        This is a drawer content
      </Drawer>
    </div>
  );
}
