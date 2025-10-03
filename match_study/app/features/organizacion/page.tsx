import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function OrganizacionPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans overflow-hidden">
      <div className="absolute inset-0 bg-animated-gradient -z-30" />
      <div className="absolute inset-0 bg-grid opacity-30 -z-20" />
      <div className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl animate-blob -z-10" />
      <div className="pointer-events-none absolute top-24 -right-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000 -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-4000 -z-10" />

      <Header />

      {/* HERO */}
      <section className="px-6 pt-32 pb-12 md:pt-40 md:pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-400 mb-4">
          Organización y Planificación
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Calendarios, recordatorios y tableros para coordinar sesiones y tareas con tu equipo.
        </p>
      </section>

      {/* TABLERO MOCK */}
      <section className="px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { col: "Por hacer", items: ["Leer cap. 3", "Problemas 1–10", "Buscar asesor"] },
            { col: "En progreso", items: ["Resumen de Cálculo", "Preparar ejemplos"] },
            { col: "Hecho", items: ["Revisión de agenda", "Crear grupo"] },
          ].map((c) => (
            <div key={c.col} className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-3 text-white">{c.col}</h3>
              <div className="space-y-3">
                {c.items.map((it) => (
                  <div key={it} className="bg-slate-900/70 border border-slate-700 rounded-lg px-4 py-3">
                    {it}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-gray-400 mt-3 text-center">
          *Ejemplo visual de tablero Kanban (UI). Próximamente: drag & drop real.
        </p>
      </section>

      {/* CALENDARIO MOCK */}
      <section className="px-6 py-12 md:py-16 bg-gray-900/70 border-t border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-8">
            Calendario de sesiones
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom", "Extra"].map((d) => (
              <div key={d} className="bg-slate-800/80 rounded-xl border border-slate-700 p-4 text-center">
                <div className="text-purple-300 font-semibold mb-2">{d}</div>
                <div className="text-gray-300 text-sm">2 sesiones</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center bg-slate-900/70 border border-slate-700 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Planea tu próxima semana
          </h3>
          <p className="text-gray-300 mb-6">
            Define metas por materia y coordina a tu equipo con recordatorios automáticos.
          </p>
          <Link href="/login" className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-bold">
            Crear agenda
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
