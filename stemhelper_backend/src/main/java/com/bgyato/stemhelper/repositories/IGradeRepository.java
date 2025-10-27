package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.GradeEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IGradeRepository extends JpaRepository<GradeEntity, Long> {
}
