package com.bgyato.stemhelper.controllers;

import com.bgyato.stemhelper.models.entities.CourseEntity;
import com.bgyato.stemhelper.services.CourseServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/courses")
@AllArgsConstructor
@CrossOrigin("http://localhost:5173/")
public class CourseController {

    private final CourseServiceImpl courseService;

    @PostMapping("")
    public ResponseEntity<CourseEntity> createCourse(@RequestBody CourseEntity course) {
        return ResponseEntity.status(HttpStatus.CREATED).body(courseService.save(course));
    }

    @PutMapping("/{id}")
    public ResponseEntity<CourseEntity> updateCourse(@PathVariable Long id, @RequestBody CourseEntity course) {
        return courseService.findById(id)
                .map(existing -> {
                    existing.setName(course.getName());
                    existing.setDescription(course.getDescription());
                    existing.setState(course.getState());
                    return ResponseEntity.ok(courseService.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("")
    public ResponseEntity<List<CourseEntity>> getAllCourses() {
        return ResponseEntity.ok(courseService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<CourseEntity> getCourseById(@PathVariable Long id) {
        return courseService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCourse(@PathVariable Long id) {
        if (courseService.findById(id).isEmpty()) return ResponseEntity.notFound().build();
        courseService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
