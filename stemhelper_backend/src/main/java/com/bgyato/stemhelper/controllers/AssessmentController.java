package com.bgyato.stemhelper.controllers;

import com.bgyato.stemhelper.models.entities.AssessmentEntity;
import com.bgyato.stemhelper.services.AssessmentServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/assessments")
@AllArgsConstructor
@CrossOrigin("*")
public class AssessmentController {

    private final AssessmentServiceImpl assessmentService;

    // Crear evaluación
    @PostMapping("")
    public ResponseEntity<AssessmentEntity> createAssessment(@RequestBody AssessmentEntity assessment) {
        return ResponseEntity.status(HttpStatus.CREATED).body(assessmentService.save(assessment));
    }

    // Actualizar evaluación
    @PutMapping("/{id}")
    public ResponseEntity<AssessmentEntity> updateAssessment(@PathVariable Long id, @RequestBody AssessmentEntity assessment) {
        return assessmentService.findById(id)
                .map(existing -> {
                    existing.setName(assessment.getName());
                    existing.setDescription(assessment.getDescription());
                    existing.setStartDate(assessment.getStartDate());
                    return ResponseEntity.ok(assessmentService.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    // Obtener todas las evaluaciones
    @GetMapping("")
    public ResponseEntity<List<AssessmentEntity>> getAllAssessments() {
        return ResponseEntity.ok(assessmentService.findAll());
    }

    // Obtener evaluación por ID
    @GetMapping("/{id}")
    public ResponseEntity<AssessmentEntity> getAssessmentById(@PathVariable Long id) {
        return assessmentService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Eliminar evaluación
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAssessment(@PathVariable Long id) {
        if (assessmentService.findById(id).isEmpty()) return ResponseEntity.notFound().build();
        assessmentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
