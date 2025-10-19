import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { Navbar } from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
