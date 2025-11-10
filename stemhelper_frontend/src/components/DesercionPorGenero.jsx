import { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { fetchWithFallback } from "../services/reportService";

const COLORS = ["#CAB2D6", "#A6CEE3", "#D9D9D9"];

export default function DesercionPorGenero() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchWithFallback("reports/desercion/genero", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then(setData)
      .catch((err) => console.error(err));
  }, []);

  const formatGenero = (g) => {
    switch (g) {
      case "M":
        return "Masculino";
      case "F":
        return "Femenino";
      case "Otro":
        return "Otro";
      default:
        return "No especificado";
    }
  };

  return (
    <div className="bg-[#244D67] p-5 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Deserción por Género
      </h2>

      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="desertores"
            nameKey="genero"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ genero, percent }) =>
              `${formatGenero(genero)} ${(percent * 100).toFixed(1)}%`
            }
          >
            {data.map((_, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name, entry) => [
              value,
              formatGenero(entry.payload.genero),
            ]}
          />
          <Legend
            formatter={(value) => formatGenero(value)}
            wrapperStyle={{ color: "#fff" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
