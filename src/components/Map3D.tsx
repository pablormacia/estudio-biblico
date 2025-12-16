"use client";

import Plot from "react-plotly.js";
import { books, JERUSALEM } from "@/src/data/books";
import { toXY } from "@/src/lib/geo";

export default function Map3D() {
    const points = books.map((b) => {
        const { x, y } = toXY(b.lat, b.lng, JERUSALEM.lat, JERUSALEM.lng);
        return { ...b, x, y };
    });

    const sections = Array.from(
        new Set(points.map((p) => p.section))
    );

    const traces = sections.map((section) => {
        const filtered = points.filter((p) => p.section === section);

        return {
            type: "scatter3d",
            mode: "markers+text",
            name: section,
            x: filtered.map((p) => p.x),
            y: filtered.map((p) => p.y),
            z: filtered.map((p) => p.year),
            text: filtered.map((p) => p.name),
            marker: {
                size: 5
            },
           hovertemplate:
  "<b>%{text}</b><br>" +
  "Autor tradicional: %{customdata[0]}<br>" +
  "Autor académico: %{customdata[1]}<br>" +
  "Lugar: %{customdata[2]}<br>" +
  "Año: %{z}<br>" +
  "<extra></extra>",
  customdata: filtered.map(p => [
  p.authors.traditional ?? "—",
  p.authors.academic ?? "—",
  p.writtenAt.place
])

        };
    });

    const planes = points.map((p) => ({
  type: "surface",
  x: [
    [Math.min(...points.map(pt => pt.x)), Math.max(...points.map(pt => pt.x))],
    [Math.min(...points.map(pt => pt.x)), Math.max(...points.map(pt => pt.x))]
  ],
  y: [
    [Math.min(...points.map(pt => pt.y)), Math.min(...points.map(pt => pt.y))],
    [Math.max(...points.map(pt => pt.y)), Math.max(...points.map(pt => pt.y))]
  ],
  z: [
    [p.year, p.year],
    [p.year, p.year]
  ],
  opacity: 0.05,
  showscale: false,
  hoverinfo: "skip"
}));

    return (
        <Plot
            data={[
    ...planes,
    ...traces
  ]}
            layout={{
  scene: {
    xaxis: { title: "Este / Oeste (km)" },
    yaxis: { title: "Norte / Sur (km)" },
    zaxis: {
      title: "Año de redacción",
      autorange: "reversed"
    }
  },
  annotations: [
    {
      text: "<b>Eje X</b>: Distancia Este–Oeste (km desde Jerusalén)",
      xref: "paper",
      yref: "paper",
      x: 0,
      y: 1.05,
      showarrow: false,
      align: "left"
    },
    {
      text: "<b>Eje Y</b>: Distancia Norte–Sur (km desde Jerusalén)",
      xref: "paper",
      yref: "paper",
      x: 0,
      y: 1.01,
      showarrow: false,
      align: "left"
    },
    {
      text: "<b>Eje Z</b>: Momento aproximado de redacción (años)",
      xref: "paper",
      yref: "paper",
      x: 0,
      y: 0.97,
      showarrow: false,
      align: "left"
    }
  ],
  margin: { t: 80 }
}}

            
        />
    );
}
