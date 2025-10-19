import { Moon, Sun, Monitor } from "lucide-react";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@workspace/ui/components/dropdown-menu";

interface ThemeMenuProps {
  currentTheme: string;
  onThemeChange: (theme: string) => void;
}

export function ThemeMenu({ currentTheme, onThemeChange }: ThemeMenuProps) {
  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
    { value: "system", label: "System", icon: Monitor },
  ];

  return (
    <DropdownMenuContent align="end">
      {themes.map(({ value, label, icon: Icon }) => (
        <DropdownMenuItem
          key={value}
          onClick={() => onThemeChange(value)}
          className={currentTheme === value ? "bg-accent" : ""}
        >
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  );
}
