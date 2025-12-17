import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 px-6">
      <div className="w-full max-w-xl text-center space-y-8">
        {/* Logo (placeholder) */}
        <div className="flex justify-center">
          <Image
            src="/biblia.png"
            alt="Estudio bíblico"
            width={96}
            height={96}
          />
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Estudio bíblico
        </h1>

        {/* Subtítulo */}
        <p className="text-slate-600">
          Lectura, contexto y exploración de los textos bíblicos.
        </p>

        {/* Navegación */}
        <nav className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link
            href="/lectura"
            className="rounded-lg border bg-white px-6 py-3 text-sm font-medium hover:bg-slate-100 transition"
          >
            📖 Lectura
          </Link>

          <Link
            href="/timeline"
            className="rounded-lg border bg-white px-6 py-3 text-sm font-medium hover:bg-slate-100 transition"
          >
            🕰 Línea de tiempo
          </Link>
        </nav>
      </div>
    </main>
  );
}
