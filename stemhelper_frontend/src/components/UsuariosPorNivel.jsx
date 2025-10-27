import { useEffect, useState } from "react";
import { reportService } from "../services/reportService";
import ReportCard from "./ReportCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function UsuariosPorNivel() {
  const [data, setData] = useState([]);

  useEffect(() => {
    reportService.getUsuariosPorNivel().then((res) => {
      const sorted = [...res].sort((a, b) => a.socioeconomic_level - b.socioeconomic_level);
      setData(sorted);
    });
  }, []);

  return (
    <ReportCard title="Usuarios por Nivel Socioeconómico">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="socioeconomic_level" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="total_usuarios" fill="#10b981" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table className="w-full text-sm border-collapse border border-gray-200 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Nivel</th>
            <th className="border px-2 py-1">Usuarios</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="text-center hover:bg-gray-50">
              <td className="border px-2 py-1">{row.socioeconomic_level ?? "N/A"}</td>
              <td className="border px-2 py-1 font-semibold">{row.total_usuarios}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ReportCard>
  );
}
