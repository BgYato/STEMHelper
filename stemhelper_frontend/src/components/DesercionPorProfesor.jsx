import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from "recharts";
import { fetchWithFallback } from "../services/reportService";

export default function DesercionPorProfesor() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchWithFallback("reports/desercion/profesor", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "true",
      },
    })
      .then((data) => {
        if (!Array.isArray(data)) {
          throw new Error("El servidor no devolvió un array válido");
        }

        const formatted = data.map((item) => ({
          ...item,
          nombre_completo: `${item.profesor} ${item.apellido}`,
        }));

        setData(formatted);
      })
      .catch((err) => console.error("❌ Error al obtener datos:", err));
  }, []);

  return (
    <div className="bg-[#244D67] p-5 rounded-xl shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4 text-center">
        Deserción por Profesor
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 10, right: 20, left: 0, bottom: 40 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#2E5D79" />
          <XAxis
            dataKey="nombre_completo"
            stroke="#244D67"
            angle={-25}
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
          <Bar dataKey="matriculados" fill="#60A5FA" name="Matriculados" />
          <Bar dataKey="desertores" fill="#F87171" name="Desertores" />
          <Bar dataKey="tasa_desercion" fill="#FBBF24" name="Tasa %" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
