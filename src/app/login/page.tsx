"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (email !== "contato@silvapradoadv.com.br") {
      setError("Acesso negado. Este email não está autorizado.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError("Falha no login. Verifique seu login e senha.");
    } else {
      window.location.href = "/editTeam";
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-off-white">
      <div className="w-full md:w-11/12 bg-dark flex items-center justify-center p-20">
        <img src="img/logob.png" alt="Logo" className="w-48 md:w-auto" />
      </div>

      <div className="w-full md:w-1/2 bg-off-white flex items-center justify-center py-16 px-6">
        <div className="w-full max-w-lg"> 
          <h2 className="text-5xl md:text-6xl font-dm-serif font-bold text-center mb-10">
            Login
          </h2>

          <form onSubmit={handleEmailLogin} className="space-y-4 font-tahoma">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-white text-base md:text-2xl focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Senha"
              className="w-full p-4 bg-white text-base md:text-2xl focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-dark text-white mt-6 px-8 py-2 text-base md:text-xl hover:bg-opacity-90 transition duration-200 cursor-pointer"
              >
                entrar
              </button>
            </div>
          </form>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          <div className="flex items-center my-6">
            <hr className="flex-grow border-t" />
            <span className="mx-4 text-dark text-sm mt-4 mb-4 md:text-3xl">
              ou
            </span>
            <hr className="flex-grow border-t" />
          </div>

          <button
            onClick={() => signIn("google")}
            className="w-full flex items-center justify-center border bg-white border-gray-300 py-4 rounded-md transition cursor-pointer"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            <span className="text-sm md:text-xl text-gray-700">
              Continuar com o Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
