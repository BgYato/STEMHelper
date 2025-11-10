import { useEffect, useState } from "react";
import { reportService } from "../services/reportService";
import ReportCard from "./ReportCard";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";

export default function DesercionPorCurso() {
  const [data, setData] = useState([]);

  useEffect(() => {
    reportService.getDesercionPorCurso().then((res) => {
      const sorted = [...res].sort(
        (a, b) => b.tasa_desercion - a.tasa_desercion
      );
      setData(sorted);
    });
  }, []);

  // --- Función para interpolar colores de rojo (alta deserción) a verde (baja) ---
  const getColor = (value) => {
    const min = Math.min(...data.map((d) => d.tasa_desercion));
    const max = Math.max(...data.map((d) => d.tasa_desercion));
    const ratio = (value - min) / (max - min || 1);
    const r = Math.round(239 + (16 - 239) * (1 - ratio));
    const g = Math.round(68 + (185 - 68) * ratio);
    const b = Math.round(68 + (129 - 68) * ratio);
    return `rgb(${r},${g},${b})`;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-[#132736] border border-gray-600 text-white p-2 rounded-md shadow-md">
          <p className="font-semibold">{label}</p>
          <p>📚 Matriculados: {item.matriculados}</p>
          <p>🚪 Desertores: {item.desertores}</p>
          <p>
            📉 Tasa de deserción:{" "}
            <span className="font-bold">{item.tasa_desercion}%</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ReportCard title="Tasa de Deserción por Curso">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="curso"
              axisLine={{ stroke: "#FFFFFF" }}
              tick={{ fill: "#FFFFFF" }}
              tickLine={{ stroke: "#FFFFFF" }}
            />
            <YAxis
              axisLine={{ stroke: "#FFFFFF" }}
              tick={{ fill: "#FFFFFF" }}
              tickLine={{ stroke: "#FFFFFF" }}
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(255,255,255,0.1)" }}
            />
            <Bar dataKey="tasa_desercion">
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getColor(entry.tasa_desercion)}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table className="w-full text-sm border-collapse border border-gray-200 mt-4">
        <thead className="bg-[#234C6A] text-white">
          <tr>
            <th className="border px-2 py-1">Curso</th>
            <th className="border px-2 py-1">Matriculados</th>
            <th className="border px-2 py-1">Desertores</th>
            <th className="border px-2 py-1">% Deserción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="text-center hover:bg-[#132736] cursor-pointer"
            >
              <td className="border px-2 py-1">{row.curso}</td>
              <td className="border px-2 py-1">{row.matriculados}</td>
              <td className="border px-2 py-1">{row.desertores}</td>
              <td className="border px-2 py-1 font-bold">
                {row.tasa_desercion}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ReportCard>
  );
}
