const LOCAL_URL = "http://localhost:8080/";
const REMOTE_URL = "https://subcreatively-glairiest-finnegan.ngrok-free.dev/";

const defaultOptions = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "true",
  },
};

export async function fetchWithFallback(endpoint, options) {
  try {
    const res = await fetch(
      `${LOCAL_URL}${endpoint}`,
      options || defaultOptions
    );
    const text = await res.text();

    if (!res.ok) throw new Error("Local fail");

    try {
      return JSON.parse(text);
    } catch {
      throw new Error("Respuesta inválida del backend local");
    }
  } catch (err) {
    console.warn("⚠️ No se pudo usar local, yendo a ngrok...", err);
    const res = await fetch(
      `${REMOTE_URL}${endpoint}`,
      options || defaultOptions
    );
    if (!res.ok) throw new Error("Remote fail");
    return await res.json();
  }
}

export const reportService = {
  getDesercionPorCurso: () => fetchWithFallback("reports/desercion/curso"),
  getDesercionPorGenero: () => fetchWithFallback("reports/desercion/genero"),
  getRankingCausas: () => fetchWithFallback("reports/ranking/causas"),
  getMatriculasPorCiudad: () => fetchWithFallback("reports/matriculas/ciudad"),
  getUsuariosPorNivel: () => fetchWithFallback("reports/usuarios/nivel"),
};
