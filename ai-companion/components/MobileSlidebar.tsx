import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import Sidebar from "./Sidebar";

function MobileSlidebar() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden pr-4">
        <Menu />
      </SheetTrigger>
      <SheetContent side="left" className="p=0 bf-secondary pt-10">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}

export default MobileSlidebar;
