import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oceano Azul",
  description: "Landing page da Oceano Azul",
  icons: {
    icon: "/images/favicon.ico", // Caminho para o arquivo na pasta public
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <script
          id="oceano-theme-init"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem("oceano-theme");
                if (theme === "dark") {
                  document.documentElement.classList.add("oceano-dark");
                  document.documentElement.dataset.theme = "dark";
                } else {
                  document.documentElement.classList.remove("oceano-dark");
                  document.documentElement.dataset.theme = "light";
                }
              } catch (error) {}
            `,
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
