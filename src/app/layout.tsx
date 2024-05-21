import type { Metadata } from "next";
import { ThemeProvider } from '@mui/material/styles';

export const metadata: Metadata = {
  title: "Playground",
  description: "Playground for testing new features and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  );
}
