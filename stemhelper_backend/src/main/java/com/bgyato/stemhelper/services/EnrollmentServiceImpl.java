package com.bgyato.stemhelper.services;

import com.bgyato.stemhelper.models.entities.EnrollmentEntity;
import com.bgyato.stemhelper.repositories.IEnrollmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EnrollmentServiceImpl {

    private final IEnrollmentRepository enrollmentRepository;

    public List<EnrollmentEntity> findAll() {
        return enrollmentRepository.findAll();
    }

    public Optional<EnrollmentEntity> findById(Long id) {
        return enrollmentRepository.findById(id);
    }

    public EnrollmentEntity save(EnrollmentEntity enrollment) {
        return enrollmentRepository.save(enrollment);
    }

    public void delete(Long id) {
        enrollmentRepository.deleteById(id);
    }
}
