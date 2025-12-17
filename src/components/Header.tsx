import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b bg-white">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        {/* Marca */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight"
        >
          Estudio bíblico
        </Link>

        {/* Navegación */}
        <nav className="flex gap-6 text-sm text-slate-700">
          <Link
            href="/lectura"
            className="hover:text-black transition"
          >
            Lectura
          </Link>

          <Link
            href="/timeline"
            className="hover:text-black transition"
          >
            Línea de tiempo
          </Link>
        </nav>
      </div>
    </header>
  );
}
