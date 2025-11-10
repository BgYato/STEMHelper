package com.bgyato.stemhelper.controllers;

import com.bgyato.stemhelper.models.entities.GradeEntity;
import com.bgyato.stemhelper.services.GradeServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/grades")
@AllArgsConstructor
@CrossOrigin("*")
public class GradeController {

    private final GradeServiceImpl gradeService;

    @PostMapping("")
    public ResponseEntity<GradeEntity> createGrade(@RequestBody GradeEntity grade) {
        return ResponseEntity.status(HttpStatus.CREATED).body(gradeService.save(grade));
    }

    @PutMapping("/{id}")
    public ResponseEntity<GradeEntity> updateGrade(@PathVariable Long id, @RequestBody GradeEntity grade) {
        return gradeService.findById(id)
                .map(existing -> {
                    existing.setGrade(grade.getGrade());
                    existing.setSemester(grade.getSemester());
                    return ResponseEntity.ok(gradeService.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("")
    public ResponseEntity<List<GradeEntity>> getAllGrades() {
        return ResponseEntity.ok(gradeService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<GradeEntity> getGradeById(@PathVariable Long id) {
        return gradeService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGrade(@PathVariable Long id) {
        if (gradeService.findById(id).isEmpty()) return ResponseEntity.notFound().build();
        gradeService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
