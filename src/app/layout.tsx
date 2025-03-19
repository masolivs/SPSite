"use client";


import { SessionProvider } from "next-auth/react";  
import './styles/globals.css';


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="pt-br">
        <body>
          <div>
            <main>{children}</main>
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}
