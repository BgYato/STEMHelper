package com.bgyato.stemhelper.controllers;

import com.bgyato.stemhelper.models.entities.EnrollmentEntity;
import com.bgyato.stemhelper.services.EnrollmentServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/enrollments")
@AllArgsConstructor
@CrossOrigin("*")
public class EnrollmentController {

    private final EnrollmentServiceImpl enrollmentService;

    @PostMapping("")
    public ResponseEntity<EnrollmentEntity> createEnrollment(@RequestBody EnrollmentEntity enrollment) {
        return ResponseEntity.status(HttpStatus.CREATED).body(enrollmentService.save(enrollment));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EnrollmentEntity> updateEnrollment(@PathVariable Long id, @RequestBody EnrollmentEntity enrollment) {
        return enrollmentService.findById(id)
                .map(existing -> {
                    existing.setStatus(enrollment.getStatus());
                    existing.setDropoutDate(enrollment.getDropoutDate());
                    return ResponseEntity.ok(enrollmentService.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("")
    public ResponseEntity<List<EnrollmentEntity>> getAllEnrollments() {
        return ResponseEntity.ok(enrollmentService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EnrollmentEntity> getEnrollmentById(@PathVariable Long id) {
        return enrollmentService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEnrollment(@PathVariable Long id) {
        if (enrollmentService.findById(id).isEmpty()) return ResponseEntity.notFound().build();
        enrollmentService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
