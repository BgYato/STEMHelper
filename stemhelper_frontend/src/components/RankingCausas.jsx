import { useEffect, useState } from "react";
import { reportService } from "../services/reportService";
import ReportCard from "./ReportCard";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#ef4444", "#f59e0b", "#3b82f6", "#10b981", "#8b5cf6"];

export default function RankingCausas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    reportService.getRankingCausas().then((res) => {
      console.log(res);
      
      const sorted = [...res].sort((a, b) => b.porcentaje - a.porcentaje);
      setData(sorted);
    });
  }, []);

  return (
    <ReportCard title="Ranking de Causas de Deserción">
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="total_casos" nameKey="causa" outerRadius={100} label>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <table className="w-full text-sm border-collapse border border-gray-200 mt-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="border px-2 py-1">Causa</th>
            <th className="border px-2 py-1">Casos</th>
            <th className="border px-2 py-1">Porcentaje</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="text-center hover:bg-gray-50">
              <td className="border px-2 py-1">{row.causa}</td>
              <td className="border px-2 py-1">{row.total_casos}</td>
              <td className="border px-2 py-1 font-semibold text-blue-700">{row.porcentaje}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ReportCard>
  );
}
