package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.EnrollmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IEnrollmentRepository extends JpaRepository<EnrollmentEntity, Long> {
}
