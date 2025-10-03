import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

// Datos dinámicos de características (puedes editar/agregar sin tocar el layout)
const FEATURES = [
  {
    title: "Videollamadas Integradas",
    description:
      "Organiza sesiones en tiempo real con cámara y pantalla compartida sin instalar nada extra.",
    image: "/images/feature-video.jpg", // pon tu imagen en public/images
  },
  {
    title: "Biblioteca de Materiales",
    description:
      "Sube y comparte apuntes, ejercicios y recursos. Todo organizado por materias y etiquetas.",
    image: "/images/feature-library.jpg",
  },
  {
    title: "Planificación Inteligente",
    description:
      "Agendas, recordatorios y tableros para coordinar equipos y repartir tareas fácilmente.",
    image: "/images/feature-planning.jpg",
  },
  {
    title: "Búsqueda por Intereses",
    description:
      "Encuentra compañeros por materia, tema o nivel. Conecta con quien estudia lo mismo.",
    image: "/images/feature-search.jpg",
  },
  {
    title: "Perfiles y Roles",
    description:
      "Define tu perfil como estudiante o asesor, muestra fortalezas y logros, y arma tu red.",
    image: "/images/feature-profiles.jpg",
  },
  {
    title: "Notificaciones y Feed",
    description:
      "Recibe avisos de nuevas sesiones, materiales compartidos y cambios en tus grupos.",
    image: "/images/feature-feed.jpg",
  },
];

const HOW_IT_WORKS = [
  {
    step: "1",
    title: "Crea tu cuenta",
    desc: "Regístrate y personaliza tu perfil académico.",
  },
  {
    step: "2",
    title: "Elige un tema",
    desc: "Busca por materia o unidad y encuentra tu equipo.",
  },
  {
    step: "3",
    title: "Conéctate",
    desc: "Programa una sesión o únete a una existente con un clic.",
  },
  {
    step: "4",
    title: "Comparte y mejora",
    desc: "Sube recursos, estudien juntos y hagan seguimiento de avances.",
  },
];

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans overflow-hidden">
      {/* Fondo animado (mismo mood que Home) */}
      <div className="absolute inset-0 bg-animated-gradient -z-30" />
      <div className="absolute inset-0 bg-grid opacity-30 -z-20" />
      <div className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl animate-blob -z-10" />
      <div className="pointer-events-none absolute top-24 -right-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000 -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-4000 -z-10" />

      <Header />

      {/* HERO */}
      <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold text-purple-400 mb-4 leading-tight">
          Características de MatchStudy ✨
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Todo lo que necesitas para estudiar mejor: organiza, colabora y comparte
          en una sola plataforma pensada para estudiantes y asesores.
        </p>

        {/* Video demostrativo (opcional) */}
        <div className="max-w-5xl mx-auto mt-10">
          <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900/60 backdrop-blur">
            {/* Si ya tienes un video local, usa /videos/intro.mp4 con poster en /images/intro-poster.jpg */}
            <video
              className="w-full h-auto"
              controls
              preload="metadata"
              poster="/images/intro-poster.jpg"
            >
              <source src="/videos/intro.mp4" type="video/mp4" />
              Tu navegador no soporta el video HTML5.
            </video>
          </div>
          <p className="text-sm text-gray-400 mt-3">
            *Video demo de navegación por sesiones, biblioteca y agenda (opcional).
          </p>
        </div>
      </section>

      {/* GRID DE FEATURES (dinámico) */}
      <section className="relative px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-12">
            Todo en un mismo lugar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f) => (
              <article
                key={f.title}
                className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 hover:border-purple-500 transition-transform hover:scale-105"
              >
                <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden border border-slate-700/60">
                  <Image
                    src={f.image}
                    alt={f.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {f.title}
                </h3>
                <p className="text-gray-300">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CÓMO FUNCIONA */}
      <section className="relative px-6 py-12 md:py-16 bg-gray-900/70 border-t border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-10">
            ¿Cómo funciona?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map((s) => (
              <div
                key={s.step}
                className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 shadow hover:border-purple-500"
              >
                <div className="text-purple-400 text-3xl font-extrabold">
                  {s.step}
                </div>
                <h4 className="text-xl font-semibold mt-2 mb-1 text-white">
                  {s.title}
                </h4>
                <p className="text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVA / BENEFICIOS */}
      <section className="relative px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-10">
            Beneficios clave
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">
                Menos fricción
              </h3>
              <p className="text-gray-300">
                Todo integrado: sesiones, materiales, recordatorios y perfiles.
              </p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">
                Enfoque en resultados
              </h3>
              <p className="text-gray-300">
                Coordina metas por tema/unidad y mide avances del equipo.
              </p>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">
                Escalable
              </h3>
              <p className="text-gray-300">
                Añade más grupos y asesores a medida que crece tu comunidad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS + TESTIMONIOS */}
      <section className="relative px-6 py-12 md:py-16 bg-gray-900/70 border-t border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-purple-400">+120</div>
              <p className="text-gray-300">Grupos activos</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-purple-400">95%</div>
              <p className="text-gray-300">Satisfacción de usuarios</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-extrabold text-purple-400">24/7</div>
              <p className="text-gray-300">Acceso a materiales</p>
            </div>
          </div>

          {/* Testimonios simples */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
            <blockquote className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 italic text-gray-300">
              “Organizamos 3 sesiones por semana y aprobamos todos. MatchStudy nos
              quitó el desorden de WhatsApp y links sueltos.”
              <span className="not-italic block mt-2 text-purple-300">
                — Equipo de Cálculo II
              </span>
            </blockquote>
            <blockquote className="bg-slate-800/80 p-6 rounded-xl border border-slate-700 italic text-gray-300">
              “Me encantó la biblioteca, ya no pierdo mis apuntes y siempre
              encuentro ejercicios resueltos.”
              <span className="not-italic block mt-2 text-purple-300">
                — Daniela, Ingeniería
              </span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* FAQ sin JS (detalles/summary) */}
      <section className="relative px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-10">
            Preguntas frecuentes
          </h2>

          <div className="space-y-4">
            <details className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <summary className="cursor-pointer text-white font-semibold">
                ¿Necesito instalar algo para las videollamadas?
              </summary>
              <p className="mt-3 text-gray-300">
                No. Todo corre en el navegador con WebRTC. Solo asegúrate de tener
                buena conexión y un navegador actualizado.
              </p>
            </details>

            <details className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <summary className="cursor-pointer text-white font-semibold">
                ¿Puedo invitar a compañeros de otras materias?
              </summary>
              <p className="mt-3 text-gray-300">
                Sí. Puedes crear grupos abiertos o privados y compartir invitaciones
                por enlace.
              </p>
            </details>

            <details className="bg-slate-800/80 p-5 rounded-xl border border-slate-700">
              <summary className="cursor-pointer text-white font-semibold">
                ¿Cómo organizo mis tareas y fechas?
              </summary>
              <p className="mt-3 text-gray-300">
                Usa el calendario y crea tableros por unidad/tema. Asigna responsables
                y plazos para llevar control.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="relative px-6 py-16">
        <div className="max-w-4xl mx-auto text-center bg-slate-900/70 border border-slate-700 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Listo para empezar?
          </h3>
          <p className="text-gray-300 mb-8">
            Crea tu cuenta, arma tu equipo y organiza tu primera sesión hoy mismo.
          </p>
          <Link
            href="/login"
            className="inline-block bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-lg hover:bg-purple-700 transition-transform hover:scale-105"
          >
            Crear mi cuenta
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
