package com.bgyato.stemhelper.services;

import com.bgyato.stemhelper.models.entities.CourseEntity;
import com.bgyato.stemhelper.repositories.ICourseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CourseServiceImpl {

    private final ICourseRepository courseRepository;

    public List<CourseEntity> findAll() {
        return courseRepository.findAll();
    }

    public Optional<CourseEntity> findById(Long id) {
        return courseRepository.findById(id);
    }

    public CourseEntity save(CourseEntity course) {
        return courseRepository.save(course);
    }

    public void delete(Long id) {
        courseRepository.deleteById(id);
    }
}
