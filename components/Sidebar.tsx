import { MenuIcon } from "lucide-react";
import NewDocumentButton from "./NewDocumentButton";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Sidebar() {
  const menuOptions = (
    <>
      <NewDocumentButton />

      {/* My Documents */}
      {/* Lists */}

      {/* Shared with Me */}
      {/* Lists */}
    </>
  );
  return (
    <div className="p-2 md:p-5 bg-gray-200 relative">
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon className="p-2 hover:opacity-30 rounded-lg" size={40} />
          </SheetTrigger>
          <SheetContent side="left" className="flex flex-col items-center">
            <SheetHeader>
              <SheetTitle className="text-center">Menu</SheetTitle>
              <div>{menuOptions}</div>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:inline">{menuOptions} </div>
    </div>
  );
}
