package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.AssessmentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAssessmentRepository extends JpaRepository<AssessmentEntity, Long> {
}
