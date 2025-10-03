"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");     // opcional para tu BD
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setOk(false);

    if (!accepted) return setError("Debes aceptar los Términos y la Política.");
    if (password.length < 6) return setError("La contraseña debe tener al menos 6 caracteres.");
    if (password !== confirm) return setError("Las contraseñas no coinciden.");

    // Aquí iría tu lógica real de registro (Firebase/NextAuth/API)
    console.log("SIGNUP_FORM_DATA:", { name, school, email });

    setOk(true);
    // Opcional: limpiar
    // setName(""); setSchool(""); setEmail(""); setPassword(""); setConfirm(""); setAccepted(false);
  };

  // Indicador súper simple de fuerza de contraseña
  const passScore = Math.min(
    3,
    (password.length >= 6 ? 1 : 0) +
      (/[A-Z]/.test(password) ? 1 : 0) +
      (/[0-9]/.test(password) ? 1 : 0)
  );

  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans overflow-hidden">
      {/* Fondo animado consistente con tu sitio */}
      <div className="absolute inset-0 bg-animated-gradient -z-30" />
      <div className="absolute inset-0 bg-grid opacity-30 -z-20" />
      <div className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl animate-blob -z-10" />
      <div className="pointer-events-none absolute top-24 -right-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000 -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-4000 -z-10" />

      <Header />

      <main className="flex flex-col items-center justify-center text-center px-4 py-32 md:py-48">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Crea tu cuenta 
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
          Únete a MatchStudy y organiza tus estudios con tu equipo.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-800/90 backdrop-blur p-10 rounded-2xl shadow-lg w-full max-w-md flex flex-col gap-5 border border-slate-700"
        >
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-200 text-sm rounded-lg px-4 py-3 text-left">
              {error}
            </div>
          )}
          {ok && (
            <div className="bg-green-500/10 border border-green-500 text-green-200 text-sm rounded-lg px-4 py-3 text-left">
              Registro simulado correcto. (Falta conectar backend)
            </div>
          )}

          <div className="text-left">
            <label className="block text-sm text-gray-300 mb-2">Nombre completo</label>
            <input
              type="text"
              placeholder="Tu nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-sm text-gray-300 mb-2">Escuela / Carrera (opcional)</label>
            <input
              type="text"
              placeholder="Universidad / Carrera"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div className="text-left">
            <label className="block text-sm text-gray-300 mb-2">Correo electrónico</label>
            <input
              type="email"
              placeholder="tucorreo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
            />
          </div>

          <div className="text-left">
            <label className="block text-sm text-gray-300 mb-2">Contraseña</label>
            <input
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              minLength={6}
            />
            {/* Indicador simple de fuerza */}
            <div className="mt-2 h-2 w-full bg-slate-700 rounded">
              <div
                className={`h-2 rounded transition-all ${
                  passScore === 0 ? "w-0" :
                  passScore === 1 ? "w-1/3 bg-red-500" :
                  passScore === 2 ? "w-2/3 bg-yellow-500" :
                  "w-full bg-green-500"
                }`}
              />
            </div>
            <div className="text-xs text-gray-400 mt-1 text-left">
              Fuerza: {["", "Baja", "Media", "Alta"][passScore]}
            </div>
          </div>

          <div className="text-left">
            <label className="block text-sm text-gray-300 mb-2">Confirmar contraseña</label>
            <input
              type="password"
              placeholder="Repite tu contraseña"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
              required
              minLength={6}
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-purple-700 transition-transform transform hover:scale-105"
          >
            Crear cuenta
          </button>

          <p className="text-gray-400 text-sm">
            ¿Ya tienes cuenta?{" "}
            <Link href="/login" className="text-purple-400 hover:underline">
              Inicia sesión
            </Link>
          </p>
        </form>
      </main>

      <Footer />
    </div>
  );
}
