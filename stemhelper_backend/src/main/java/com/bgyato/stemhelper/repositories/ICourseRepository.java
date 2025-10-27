package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.CourseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICourseRepository extends JpaRepository<CourseEntity, Long> {
}
