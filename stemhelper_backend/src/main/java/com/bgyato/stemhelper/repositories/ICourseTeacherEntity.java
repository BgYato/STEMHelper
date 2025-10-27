package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.CourseTeacherEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICourseTeacherEntity extends JpaRepository<CourseTeacherEntity, Long> {
}
