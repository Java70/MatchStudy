import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const QuickAction = ({ href, title, desc }: { href: string; title: string; desc: string }) => (
  <Link
    href={href}
    className="block bg-slate-800/80 backdrop-blur-sm p-5 rounded-xl border border-slate-700 hover:border-purple-500 transition"
  >
    <div className="text-white font-semibold">{title}</div>
    <div className="text-gray-400 text-sm">{desc}</div>
  </Link>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 text-center">
    <div className="text-3xl font-extrabold text-purple-400">{value}</div>
    <div className="text-gray-300">{label}</div>
  </div>
);

const MaterialItem = ({
  title,
  tag,
  img,
}: {
  title: string;
  tag: string;
  img: string;
}) => (
  <div className="flex gap-3 items-center bg-slate-900/60 rounded-lg border border-slate-700 p-3">
    <div className="relative h-12 w-16 rounded-md overflow-hidden border border-slate-700/70">
      <Image src={img} alt={title} fill className="object-cover" />
    </div>
    <div className="flex-1">
      <div className="text-sm text-purple-300 uppercase tracking-wide">{tag}</div>
      <div className="text-white font-semibold leading-tight">{title}</div>
    </div>
    <Link
      href="/features/biblioteca"
      className="text-sm text-purple-400 hover:underline"
    >
      Ver
    </Link>
  </div>
);

const SessionItem = ({
  title,
  date,
  time,
}: {
  title: string;
  date: string;
  time: string;
}) => (
  <div className="bg-slate-900/60 rounded-lg border border-slate-700 p-3">
    <div className="text-white font-semibold">{title}</div>
    <div className="text-gray-400 text-sm">{date} · {time}</div>
    <div className="mt-2 flex gap-2">
      <Link href="/features/videollamadas" className="px-3 py-1 rounded-md bg-purple-600 text-white text-sm hover:bg-purple-700">
        Unirse
      </Link>
      <Link href="#" className="px-3 py-1 rounded-md border border-slate-600 text-gray-200 text-sm hover:bg-slate-800">
        Detalles
      </Link>
    </div>
  </div>
);

export default function DashboardPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans overflow-hidden">
      {/* Fondo animado consistente con tu sitio */}
      <div className="absolute inset-0 bg-animated-gradient -z-30" />
      <div className="absolute inset-0 bg-grid opacity-30 -z-20" />
      <div className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl animate-blob -z-10" />
      <div className="pointer-events-none absolute top-24 -right-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000 -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-4000 -z-10" />

      <Header />

      {/* Contenido */}
      <main className="px-6 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 h-max">
            <div className="mb-6">
              <div className="text-sm text-gray-400">Bienvenido,</div>
              <div className="text-xl font-bold text-white">Usuario MatchStudy</div>
            </div>

            <nav className="space-y-2">
              <Link href="/dashboard" className="block px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white">
                Resumen
              </Link>
              <Link href="/features/videollamadas" className="block px-3 py-2 rounded-lg hover:bg-slate-800 border border-slate-700 text-gray-200">
                Videollamadas
              </Link>
              <Link href="/features/biblioteca" className="block px-3 py-2 rounded-lg hover:bg-slate-800 border border-slate-700 text-gray-200">
                Biblioteca
              </Link>
              <Link href="/features/organizacion" className="block px-3 py-2 rounded-lg hover:bg-slate-800 border border-slate-700 text-gray-200">
                Organización
              </Link>
              <Link href="/contacto" className="block px-3 py-2 rounded-lg hover:bg-slate-800 border border-slate-700 text-gray-200">
                Soporte
              </Link>
            </nav>

            <div className="mt-6">
              <div className="text-xs text-gray-400 mb-2">Acciones rápidas</div>
              <div className="space-y-2">
                <QuickAction href="/features/videollamadas" title="Crear sala" desc="Inicia una videollamada" />
                <QuickAction href="/features/biblioteca" title="Subir material" desc="PDF/Apuntes/Guías" />
                <QuickAction href="/features/organizacion" title="Nueva tarea" desc="Agrega al tablero" />
              </div>
            </div>
          </aside>

          {/* Main */}
          <section className="space-y-6">
            {/* Encabezado */}
            <header className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
              <h1 className="text-2xl md:text-3xl font-extrabold text-purple-400">
                Tu panel de estudio
              </h1>
              <p className="text-gray-300">
                Aquí verás tus próximas sesiones, materiales y progreso.
              </p>
            </header>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard value="3" label="Sesiones esta semana" />
              <StatCard value="12" label="Materiales guardados" />
              <StatCard value="8 h" label="Tiempo de estudio" />
              <StatCard value="2" label="Grupos activos" />
            </div>

            {/* Dos columnas principales */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* Columna grande (xl: span 2) */}
              <div className="xl:col-span-2 space-y-6">
                {/* Agenda / Próximas sesiones */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">Próximas sesiones</h2>
                    <Link href="/features/organizacion" className="text-sm text-purple-400 hover:underline">
                      Ver calendario
                    </Link>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <SessionItem title="Cálculo II — Integrales" date="Vie, 4 Oct" time="18:00–19:00" />
                    <SessionItem title="Base de Datos — SQL" date="Sáb, 5 Oct" time="10:00–11:30" />
                    <SessionItem title="Física — Movimiento" date="Dom, 6 Oct" time="12:00–13:00" />
                  </div>
                </div>

                {/* Actividad / Notificaciones */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">Actividad reciente</h2>
                    <Link href="/features/biblioteca" className="text-sm text-purple-400 hover:underline">
                      Ver todo
                    </Link>
                  </div>
                  <ul className="space-y-3">
                    {[
                      "Daniela subió ‘Integrales resueltas (PDF)’",
                      "Se actualizó el tablero de Organización",
                      "Nueva sala creada: ‘Repaso de Álgebra’",
                    ].map((t) => (
                      <li key={t} className="bg-slate-800/70 border border-slate-700 rounded-lg px-4 py-3">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Columna lateral */}
              <div className="space-y-6">
                {/* Materiales recientes */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-white">Materiales recientes</h2>
                    <Link href="/features/biblioteca" className="text-sm text-purple-400 hover:underline">
                      Biblioteca
                    </Link>
                  </div>
                  <div className="space-y-3">
                    <MaterialItem title="Álgebra — Formulario" tag="PDF" img="/images/lib-1.jpg" />
                    <MaterialItem title="Cálculo — Integrales" tag="PDF" img="/images/lib-2.jpg" />
                    <MaterialItem title="Programación — JS" tag="Apuntes" img="/images/lib-4.jpg" />
                  </div>
                </div>

                {/* Accesos rápidos */}
                <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Accesos rápidos</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <QuickAction href="/features/videollamadas" title="Nueva videollamada" desc="Crear sala ahora" />
                    <QuickAction href="/features/organizacion" title="Nueva tarea" desc="Agregar al tablero" />
                    <QuickAction href="/features/biblioteca" title="Subir material" desc="PDF, apuntes, guías" />
                    <QuickAction href="/contacto" title="Soporte" desc="¿Dudas? Escríbenos" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
