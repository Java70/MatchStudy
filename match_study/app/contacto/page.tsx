import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactoPage() {
  return (
    <div className="relative min-h-screen flex flex-col bg-slate-950 text-white font-sans overflow-hidden">
      {/* Fondo animado consistente */}
      <div className="absolute inset-0 bg-animated-gradient -z-30" />
      <div className="absolute inset-0 bg-grid opacity-30 -z-20" />
      <div className="pointer-events-none absolute -top-10 -left-16 h-72 w-72 rounded-full bg-purple-600/25 blur-3xl animate-blob -z-10" />
      <div className="pointer-events-none absolute top-24 -right-12 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl animate-blob animation-delay-2000 -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-3xl animate-blob animation-delay-4000 -z-10" />

      <Header />

      <main className="px-6 pt-32 pb-16 md:pt-40 md:pb-20">
        <section className="max-w-4xl mx-auto text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-purple-400 mb-4">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-gray-300">
            ¿Dudas, sugerencias o soporte? Envíanos un mensaje y te respondemos.
          </p>
        </section>

        <section className="max-w-3xl mx-auto">
          <form
            action="#"
            method="post"
            className="bg-slate-900/70 backdrop-blur p-8 rounded-2xl border border-slate-700 shadow-xl space-y-5"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-gray-300 mb-2">Nombre</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-gray-300 mb-2">Correo</label>
                <input
                  type="email"
                  name="correo"
                  placeholder="tucorreo@ejemplo.com"
                  className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Asunto</label>
              <input
                type="text"
                name="asunto"
                placeholder="¿Sobre qué quieres hablar?"
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <div>
              <label className="block text-sm text-gray-300 mb-2">Mensaje</label>
              <textarea
                name="mensaje"
                placeholder="Cuéntanos con detalle…"
                rows={5}
                className="w-full rounded-lg bg-slate-800 border border-slate-700 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full md:w-auto bg-purple-600 hover:bg-purple-700 transition-colors px-8 py-3 rounded-full font-bold shadow-lg"
            >
              Enviar mensaje
            </button>
          </form>

          {/* Info lateral simple */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <div className="text-purple-400 text-sm uppercase tracking-wide mb-1">Correo</div>
              <div className="text-gray-200">soporte@matchstudy.com</div>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <div className="text-purple-400 text-sm uppercase tracking-wide mb-1">Horario</div>
              <div className="text-gray-200">Lun–Vie, 9:00–18:00</div>
            </div>
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <div className="text-purple-400 text-sm uppercase tracking-wide mb-1">Respuesta</div>
              <div className="text-gray-200">Dentro de 24–48 h</div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
