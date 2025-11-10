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

export default function UsuariosPorNivel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    reportService.getUsuariosPorNivel().then((res) => {
      const sorted = [...res].sort(
        (a, b) => a.socioeconomic_level - b.socioeconomic_level
      );
      setData(sorted);
    });
  }, []);

  // Tooltip personalizado
  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload;
      return (
        <div className="bg-[#132736] border border-gray-600 text-white p-2 rounded-md shadow-md">
          <p className="font-semibold">Estrato: {item.socioeconomic_level}</p>
          <p>
            👥 Usuarios:{" "}
            <span className="font-bold">{item.total_usuarios}</span>
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <ReportCard title="Usuarios por Nivel Socioeconómico">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
            <XAxis
              dataKey="socioeconomic_level"
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
            <Bar dataKey="total_usuarios">
              {data.map((entry, index) => {
                const ratio = index / (data.length - 1 || 1);
                const r = Math.round(239 + (16 - 239) * ratio);
                const g = Math.round(68 + (185 - 68) * ratio);
                const b = Math.round(68 + (129 - 68) * ratio);
                const color = `rgb(${r},${g},${b})`;
                return <Cell key={index} fill={color} />;
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table className="w-full text-sm border-collapse border border-gray-200 mt-4">
        <thead className="bg-[#234C6A] text-white">
          <tr>
            <th className="border px-2 py-1">Estrato</th>
            <th className="border px-2 py-1">Usuarios</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={i}
              className="text-center hover:bg-[#132736] cursor-pointer"
            >
              <td className="border px-2 py-1">
                {row.socioeconomic_level ?? "N/A"}
              </td>
              <td className="border px-2 py-1 font-semibold">
                {row.total_usuarios}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ReportCard>
  );
}
