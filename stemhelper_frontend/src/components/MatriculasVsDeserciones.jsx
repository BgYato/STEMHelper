import { useEffect, useState } from "react";
import { fetchWithFallback } from "../services/reportService";
import {
  ComposedChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

export default function MatriculasVsDeserciones() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchWithFallback("reports/matriculas/ciudad", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="bg-[#244D67] p-5 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Matrículas vs Deserciones por Ciudad
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 30 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2E5D79" />
          <XAxis
            dataKey="ciudad"
            stroke="#244D67"
            angle={-20}
            textAnchor="end"
            interval={0}
          />
          <YAxis stroke="#fff" />
          <Tooltip
            formatter={(value, name) => {
              if (name === "tasa_desercion") return `${value}%`;
              return value;
            }}
            labelStyle={{ color: "#000" }}
          />
          <Legend />

          {/* Barras de matriculados y desertores */}
          <Bar
            dataKey="matriculados"
            barSize={25}
            fill="#34D399"
            name="Matriculados"
          />
          <Bar
            dataKey="desertores"
            barSize={25}
            fill="#F87171"
            name="Desertores"
          />

          {/* Línea de tasa de deserción */}
          <Line
            type="monotone"
            dataKey="tasa_desercion"
            stroke="#FBBF24"
            strokeWidth={2}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
            name="Tasa de Deserción (%)"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}
