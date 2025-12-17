'use client'
import TimelineView from "@/src/components/Timeline";
import EventDetails from "@/src/components/EventDetails";

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Línea de tiempo bíblica
      </h1>

      <p className="text-sm text-slate-600 mb-6 max-w-3xl">
        Línea de tiempo interactiva centrada en el nacimiento de Jesús.
        Permite explorar los principales sucesos bíblicos y los libros
        que los narran.
      </p>

      {/* Timeline */}
      <section className="mb-8">
        <TimelineView
          onSelect={(id) => {
            // por ahora solo log, luego lo conectamos al panel
            console.log("Evento seleccionado:", id);
          }}
        />
      </section>

      {/* Panel de detalles (placeholder) */}
      <section>
        <EventDetails />
      </section>
    </main>
  );
}
