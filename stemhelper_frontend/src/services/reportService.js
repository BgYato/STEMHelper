const API_URL = "http://localhost:8080/reports";

export const reportService = {
  getDesercionPorCurso: async () => {
    const res = await fetch(`${API_URL}/desercion/curso`);
    return res.json();
  },

  getDesercionPorGenero: async () => {
    const res = await fetch(`${API_URL}/desercion/genero`);
    return res.json();
  },

  getRankingCausas: async () => {
    const res = await fetch(`${API_URL}/ranking/causas`);
    return res.json();
  },

  getMatriculasPorCiudad: async () => {
    const res = await fetch(`${API_URL}/matriculas/ciudad`);
    return res.json();
  },

  getUsuariosPorNivel: async () => {
    const res = await fetch(`${API_URL}/usuarios/nivel`);
    return res.json();
  },
};
