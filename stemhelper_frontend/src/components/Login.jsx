import { useState } from "react";
import { fetchWithFallback } from "../services/reportService";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await fetchWithFallback("auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (data.success) {
        localStorage.setItem("user", JSON.stringify(data.user));
        onLogin(data.user);
      } else {
        setError(data.message);
      }
    } catch (err) {
      console.error(err);
      setError("Error de conexión con el servidor");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#1B3C53] via-[#163140] to-[#0E2433] text-white">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold tracking-wide mb-2">STEM HELPER</h1>
        <p className="text-gray-300 text-sm">
          Inicia sesión para acceder al panel de control
        </p>
      </div>

      <form
        onSubmit={handleLogin}
        className="bg-[#244D67]/60 backdrop-blur-md p-8 rounded-3xl shadow-2xl w-[90%] max-w-md border border-white/10 transition-all hover:border-white/20"
      >
        <div className="mb-5">
          <label className="block text-sm mb-2 text-gray-200">Correo</label>
          <input
            type="email"
            placeholder="tu@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1B3C53] text-white border border-white/10 focus:outline-none focus:border-green-400 placeholder-gray-400 transition"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-2 text-gray-200">Contraseña</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 rounded-xl bg-[#1B3C53] text-white border border-white/10 focus:outline-none focus:border-green-400 placeholder-gray-400 transition"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 flex items-center justify-center gap-2 ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-700 hover:to-cyan-700"
          }`}
        >
          {loading ? (
            <>
              <span className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
              Cargando...
            </>
          ) : (
            "Iniciar sesión"
          )}
        </button>

        {error && (
          <p className="text-red-400 mt-4 text-center text-sm animate-pulse">
            {error}
          </p>
        )}

        <p className="text-gray-400 text-xs text-center mt-6">
          🔒 <span className="text-gray-300">Demo:</span> usa{" "}
          <span className="text-green-400 font-medium">test@example.com</span> y
          contraseña <span className="text-green-400 font-medium">example</span>{" "}
          para probar.
        </p>
      </form>

      <footer className="mt-10 text-gray-400 text-xs">
        © 2025 STEM Helper — Ingeniería de Sistemas CUN
      </footer>
    </div>
  );
}

export default Login;
