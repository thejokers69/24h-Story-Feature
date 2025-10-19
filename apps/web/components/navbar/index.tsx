"use client";

import { NavbarLogo } from "./navbar-logo";
import { NavbarActions } from "./navbar-actions";
import { ModeToggle } from "../mode-toggle";

interface NavbarProps {
  title?: string;
  className?: string;
}

export function Navbar({ title, className }: NavbarProps) {
  return (
    <nav
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${className || ""}`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <NavbarLogo title={title} />
        <NavbarActions>
          <ModeToggle />
        </NavbarActions>
      </div>
    </nav>
  );
}

export default Navbar;
