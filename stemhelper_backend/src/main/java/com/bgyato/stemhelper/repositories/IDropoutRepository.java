package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.DropoutEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDropoutRepository extends JpaRepository<DropoutEntity, Long> {
}
