import { ReactNode } from "react";

interface NavbarActionsProps {
  children?: ReactNode;
  className?: string;
}

export function NavbarActions({ children, className }: NavbarActionsProps) {
  return (
    <div className={`flex items-center space-x-2 ${className || ""}`}>
      {children}
    </div>
  );
}
