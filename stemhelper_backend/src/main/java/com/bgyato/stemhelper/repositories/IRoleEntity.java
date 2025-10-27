package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.RoleEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRoleEntity extends JpaRepository<RoleEntity, Long> {
}
