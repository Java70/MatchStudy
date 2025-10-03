import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";

const DOCS = [
  { title: "Álgebra — Formulario", tag: "PDF", img: "/images/lib-1.jpg" },
  { title: "Cálculo — Integrales", tag: "PDF", img: "/images/lib-2.jpg" },
  { title: "Física — Movimiento", tag: "Notas", img: "/images/lib-3.jpg" },
  { title: "Programación — JS", tag: "Apuntes", img: "/images/lib-4.jpg" },
  { title: "Bases de Datos — SQL", tag: "Guía", img: "/images/lib-5.jpg" },
  { title: "Redes — TCP/IP", tag: "Resumen", img: "/images/lib-6.jpg" },
];

export default function BibliotecaPage() {
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
          Biblioteca de Materiales
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Apuntes, PDFs y guías en un solo lugar. Ordena por materia, etiqueta o popularidad.
        </p>
      </section>

      {/* GRID DE RECURSOS */}
      <section className="px-6 pb-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {DOCS.map((d) => (
            <article key={d.title} className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 hover:border-purple-500 transition">
              <div className="relative w-full h-40 rounded-lg overflow-hidden border border-slate-700/60 mb-3">
                <Image src={d.img} alt={d.title} fill className="object-cover" />
              </div>
              <div className="text-sm text-purple-300 mb-1 uppercase tracking-wide">{d.tag}</div>
              <h3 className="text-lg font-semibold text-white">{d.title}</h3>
              <p className="text-gray-400 text-sm mt-1">Subido por @equipo</p>
            </article>
          ))}
        </div>
      </section>

      {/* BUSCADOR MOCK + FILTROS */}
      <section className="px-6 py-12 md:py-16 bg-gray-900/70 border-t border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-400 mb-8">
            Encuentra lo que necesitas
          </h2>
          <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <input className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3" placeholder="Buscar por tema o materia" />
              <select className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3">
                <option>Materia</option>
                <option>Álgebra</option>
                <option>Cálculo</option>
                <option>Física</option>
                <option>Programación</option>
              </select>
              <select className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-3">
                <option>Tipo</option>
                <option>PDF</option>
                <option>Apuntes</option>
                <option>Guía</option>
              </select>
              <button className="bg-purple-600 hover:bg-purple-700 rounded-lg px-4 py-3 font-bold">
                Buscar
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-3">
              *UI demostrativa. Próximamente: filtros reales y paginación.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center bg-slate-900/70 border border-slate-700 rounded-2xl p-10 shadow-xl">
          <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            ¿Tienes un buen material?
          </h3>
          <p className="text-gray-300 mb-6">
            Sube tus PDFs o apuntes y compártelos con tu grupo.
          </p>
          <Link href="/login" className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-bold">
            Subir material
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
