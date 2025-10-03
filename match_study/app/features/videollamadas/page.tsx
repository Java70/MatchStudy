import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function VideollamadasPage() {
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
          Videollamadas Integradas
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Reúnete con tu equipo en un clic. Video en navegador, uso de pantalla compartida y chat en vivo.
        </p>
      </section>

      {/* DEMO / MOCK VIDEO */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden border border-slate-700 shadow-xl bg-slate-900/60 backdrop-blur">
          {/* Pon un demo real si quieres: /videos/call-demo.mp4 */}
          <Image
            src="/images/call-preview.jpg"
            alt="Demo de videollamada"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
            priority
          />
        </div>
        <p className="text-sm text-gray-400 mt-3 text-center">
          *Vista de ejemplo de una sala con pantalla compartida y chat lateral.
        </p>
      </section>

      {/* CARACTERÍSTICAS CLAVE */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { t: "Pantalla Compartida", d: "Presenta diapositivas, código o ejercicios en tiempo real." },
            { t: "Chat y Reacciones", d: "Comunicación rápida sin interrumpir al expositor." },
            { t: "Salas Temporales", d: "Enlaces con caducidad para enfocarse por sesión." },
          ].map((it) => (
            <div key={it.t} className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-2">{it.t}</h3>
              <p className="text-gray-300">{it.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-16">
        <div className="max-w-4xl mx-auto text-center bg-slate-900/70 border border-slate-700 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl font-extrabold text-white mb-4">
            Agenda tu primera sesión
          </h3>
          <p className="text-gray-300 mb-6">
            Crea una sala y comparte el enlace con tu equipo.
          </p>
          <Link
            href="/login"
            className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-bold"
          >
            Empezar ahora
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
