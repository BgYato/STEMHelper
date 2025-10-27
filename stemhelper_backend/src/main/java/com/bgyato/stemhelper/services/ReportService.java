package com.bgyato.stemhelper.services;

import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final JdbcTemplate jdbcTemplate;

    // 🔹 1. Deserción por curso
    public List<Map<String, Object>> getDesercionPorCurso() {
        return jdbcTemplate.queryForList("SELECT * FROM vw_desercion_por_curso");
    }

    // 🔹 2. Tasa de deserción por profesor
    public List<Map<String, Object>> getDesercionPorProfesor() {
        return jdbcTemplate.queryForList("SELECT * FROM vw_tasa_desercion_por_profesor");
    }

    // 🔹 3. Tasa de deserción por curso y profesor
    public List<Map<String, Object>> getDesercionPorCursoYProfesor() {
        return jdbcTemplate.queryForList("SELECT * FROM vw_tasa_desercion_por_curso_y_profesor");
    }

    // 🔹 4. Ranking de causas de deserción
    public List<Map<String, Object>> getRankingCausasDesercion() {
        return jdbcTemplate.queryForList("SELECT * FROM vw_ranking_causas_desercion");
    }

    // 🔹 5. Tasa de deserción por género
    public List<Map<String, Object>> getDesercionPorGenero() {
        return jdbcTemplate.queryForList("SELECT * FROM vw_tasa_desercion_por_genero");
    }

    // 🔹 6. Matriculados vs desertores por ciudad
    public List<Map<String, Object>> getMatriculasVsDesercionesPorCiudad() {
        return jdbcTemplate.queryForList("SELECT * FROM vw_matriculas_vs_deserciones_por_ciudad");
    }

    // 🔹 7. Usuarios por nivel socioeconómico
    public List<Map<String, Object>> getUsuariosPorNivelSocioeconomico() {
        return jdbcTemplate.queryForList("SELECT * FROM vw_usuarios_por_nivel");
    }
}
