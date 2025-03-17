"use client";

import { SessionProvider } from "next-auth/react";  
import { useSession, signOut } from "next-auth/react";  
import Link from "next/link";
import './styles/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <html lang="pt-br">
        <body>
          <div>
            <header>
              <MainContent /> 
            </header>
            <main>{children}</main> 
          </div>
        </body>
      </html>
    </SessionProvider>
  );
}

function MainContent() {
  const { data: session } = useSession(); 

  return (
    <>
      {!session ? (
        <Link href="/login">Login</Link> 
      ) : (
        <div>
          <span>{session.user?.email}</span> 
          <button onClick={() => signOut()}>Sair</button> 
        </div>
      )}
    </>
  );
}
