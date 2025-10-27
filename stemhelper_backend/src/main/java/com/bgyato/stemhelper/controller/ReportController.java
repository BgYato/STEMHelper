package com.bgyato.stemhelper.controllers;

import com.bgyato.stemhelper.services.ReportService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/reports")
@AllArgsConstructor
@CrossOrigin("http://localhost:5173/")
public class ReportController {

    private final ReportService reportService;

    @GetMapping("/desercion/curso")
    public ResponseEntity<List<Map<String, Object>>> desercionPorCurso() {
        return ResponseEntity.ok(reportService.getDesercionPorCurso());
    }

    @GetMapping("/desercion/genero")
    public ResponseEntity<List<Map<String, Object>>> desercionPorGenero() {
        return ResponseEntity.ok(reportService.getDesercionPorGenero());
    }

    @GetMapping("/desercion/profesor")
    public ResponseEntity<List<Map<String, Object>>> desercionPorProfesor() {
        return ResponseEntity.ok(reportService.getDesercionPorProfesor());
    }

    @GetMapping("/ranking/causas")
    public ResponseEntity<List<Map<String, Object>>> rankingCausas() {
        return ResponseEntity.ok(reportService.getRankingCausasDesercion());
    }

    @GetMapping("/matriculas/ciudad")
    public ResponseEntity<List<Map<String, Object>>> matriculasVsDeserciones() {
        return ResponseEntity.ok(reportService.getMatriculasVsDesercionesPorCiudad());
    }

    @GetMapping("/usuarios/nivel")
    public ResponseEntity<List<Map<String, Object>>> usuariosPorNivel() {
        return ResponseEntity.ok(reportService.getUsuariosPorNivelSocioeconomico());
    }
}
