package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.CityEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICityRepository extends JpaRepository<CityEntity, Long> {
}
