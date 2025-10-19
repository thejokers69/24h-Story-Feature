interface NavbarLogoProps {
  title?: string;
  className?: string;
}

export function NavbarLogo({
  title = "24-Hour Stories",
  className,
}: NavbarLogoProps) {
  return (
    <div className={`flex items-center space-x-2 ${className || ""}`}>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  );
}
