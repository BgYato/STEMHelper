package com.bgyato.stemhelper.services;

import com.bgyato.stemhelper.models.entities.GradeEntity;
import com.bgyato.stemhelper.repositories.IGradeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class GradeServiceImpl {

    private final IGradeRepository gradeRepository;

    public List<GradeEntity> findAll() {
        return gradeRepository.findAll();
    }

    public Optional<GradeEntity> findById(Long id) {
        return gradeRepository.findById(id);
    }

    public GradeEntity save(GradeEntity grade) {
        return gradeRepository.save(grade);
    }

    public void delete(Long id) {
        gradeRepository.deleteById(id);
    }
}
