import { useEffect, useState } from "react";
import { reportService } from "../services/reportService";
import ReportCard from "./ReportCard";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

export default function DesercionPorCurso() {
  const [data, setData] = useState([]);

  useEffect(() => {
    reportService.getDesercionPorCurso().then((res) => {
      const sorted = [...res].sort((a, b) => b.tasa_desercion - a.tasa_desercion);
      setData(sorted);
    });
  }, []);

  return (
    <ReportCard title="Tasa de Deserción por Curso">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="curso" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="tasa_desercion" fill="#3b82f6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <table className="w-full text-sm border-collapse border border-gray-200 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Curso</th>
            <th className="border px-2 py-1">Matriculados</th>
            <th className="border px-2 py-1">Desertores</th>
            <th className="border px-2 py-1">% Deserción</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="text-center hover:bg-gray-50">
              <td className="border px-2 py-1">{row.curso}</td>
              <td className="border px-2 py-1">{row.matriculados}</td>
              <td className="border px-2 py-1">{row.desertores}</td>
              <td className="border px-2 py-1 text-blue-700 font-bold">{row.tasa_desercion}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ReportCard>
  );
}
