"use client";

import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@workspace/ui/components/dropdown-menu";
import { ThemeToggleButton } from "./theme-toggle-button";
import { ThemeMenu } from "./theme-menu";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <ThemeToggleButton />
      </DropdownMenuTrigger>
      <ThemeMenu currentTheme={theme || "system"} onThemeChange={setTheme} />
    </DropdownMenu>
  );
}

export default ModeToggle;
