import { useState } from "react";
import "./App.css";
import DesercionPorCurso from "./components/DesercionPorCurso";
import RankingCausas from "./components/RankingCausas";
import UsuariosPorNivel from "./components/UsuariosPorNivel";
import Login from "./components/Login";
import DesercionPorGenero from "./components/DesercionPorGenero";
import DesercionPorProfesor from "./components/DesercionPorProfesor";
import MatriculasVsDeserciones from "./components/MatriculasVsDeserciones";

function App() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const [vista, setVista] = useState("general");
  const [menuAbierto, setMenuAbierto] = useState(false);

  if (!user) return <Login onLogin={setUser} />;

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-[#1B3C53] text-white flex flex-col">
      {/* NAVBAR */}
      <nav className="bg-[#244D67] shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold">STEM HELPER</h1>
          <span className="text-gray-300">| Dashboard</span>
        </div>

        <div className="flex items-center gap-4 relative">
          <div className="text-right">
            <p className="font-semibold">
              {"Bienvenido, " + user.name + " " + user.lastName || "Usuario"}
            </p>
            <span className="bg-green-500 text-white select-none text-xs px-2 py-1 rounded-full">
              {user.role.name || "Estudiante"}
            </span>
          </div>

          {/* Dropdown controlado con estado */}
          <div className="relative">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className="bg-[#2E5D79] cursor-pointer px-3 py-2 rounded hover:bg-[#356e90] transition"
            >
              Vistas ▼
            </button>

            {menuAbierto && (
              <div
                className="absolute bg-[#2E5D79] cursor-pointer rounded mt-2 right-0 w-40 text-sm shadow-lg z-10"
                onMouseLeave={() => setMenuAbierto(false)}
              >
                <button
                  onClick={() => {
                    setVista("general");
                    setMenuAbierto(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#3e7ea5] cursor-pointer"
                >
                  General
                </button>
                <button
                  onClick={() => {
                    setVista("detalles");
                    setMenuAbierto(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#3e7ea5] cursor-pointer"
                >
                  Detalle de cursos
                </button>
                <button
                  onClick={() => {
                    setVista("niveles");
                    setMenuAbierto(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#3e7ea5] cursor-pointer"
                >
                  Usuarios por nivel
                </button>
                <button
                  onClick={() => {
                    setVista("analisis");
                    setMenuAbierto(false);
                  }}
                  className="w-full text-left px-4 py-2 hover:bg-[#3e7ea5] cursor-pointer"
                >
                  Análisis complementario
                </button>
              </div>
            )}
          </div>

          <button
            onClick={logout}
            className="bg-red-500 cursor-pointer hover:bg-red-700 px-4 py-2 rounded transition"
          >
            Cerrar sesión
          </button>
        </div>
      </nav>

      <div className="bg-gradient-to-r from-[#2E5D79] to-[#3A7BAA] text-white text-center py-3 px-4 text-sm shadow-inner">
        📢 Por favor, evalúa tu experiencia en la plataforma llenando el
        siguiente formulario:{" "}
        <a
          href="https://forms.gle/x9Lb2Tzk3ooCqjvn6"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 font-semibold hover:underline"
        >
          Evaluar página
        </a>
      </div>

      {/* CONTENIDO */}
      <main className="flex-1 p-6 md:p-10">
        {vista === "general" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Resumen General</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
              <div className="bg-[#244D67] rounded-xl p-5 shadow-lg text-center">
                <p className="text-gray-300 text-sm">Total matriculados</p>
                <p className="text-3xl font-bold mt-2">1,245</p>
              </div>
              <div className="bg-[#244D67] rounded-xl p-5 shadow-lg text-center">
                <p className="text-gray-300 text-sm">Deserción</p>
                <p className="text-3xl font-bold mt-2 text-red-400">8.2%</p>
              </div>
              <div className="bg-[#244D67] rounded-xl p-5 shadow-lg text-center">
                <p className="text-gray-300 text-sm">Causas principales</p>
                <p className="text-3xl font-bold mt-2">Académicas</p>
              </div>
              <div className="bg-[#244D67] rounded-xl p-5 shadow-lg text-center">
                <p className="text-gray-300 text-sm">Última actualización</p>
                <p className="text-3xl font-bold mt-2 text-green-400">
                  09 Nov 2025
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <DesercionPorCurso />
              <RankingCausas />
              <UsuariosPorNivel />
            </div>
          </div>
        )}

        {vista === "detalles" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Detalle de cursos</h2>
            <DesercionPorCurso />
            <RankingCausas />
          </div>
        )}

        {vista === "niveles" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Usuarios por nivel</h2>
            <UsuariosPorNivel />
          </div>
        )}

        {vista === "analisis" && (
          <div>
            <h2 className="text-2xl font-bold mb-6">Análisis Complementario</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <DesercionPorGenero />
              <DesercionPorProfesor />
              <MatriculasVsDeserciones />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
