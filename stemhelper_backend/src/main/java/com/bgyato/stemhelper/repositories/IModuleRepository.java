package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.ModuleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IModuleRepository extends JpaRepository<ModuleEntity, Long> {
}
