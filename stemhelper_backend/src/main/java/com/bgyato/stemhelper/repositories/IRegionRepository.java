package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.RegionEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IRegionRepository extends JpaRepository<RegionEntity, Long> {
}
