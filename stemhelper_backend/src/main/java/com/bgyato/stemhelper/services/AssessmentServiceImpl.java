package com.bgyato.stemhelper.services;

import com.bgyato.stemhelper.models.entities.AssessmentEntity;
import com.bgyato.stemhelper.repositories.IAssessmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AssessmentServiceImpl {

    private final IAssessmentRepository assessmentRepository;

    public List<AssessmentEntity> findAll() {
        return assessmentRepository.findAll();
    }

    public Optional<AssessmentEntity> findById(Long id) {
        return assessmentRepository.findById(id);
    }

    public AssessmentEntity save(AssessmentEntity assessment) {
        return assessmentRepository.save(assessment);
    }

    public void delete(Long id) {
        assessmentRepository.deleteById(id);
    }
}
