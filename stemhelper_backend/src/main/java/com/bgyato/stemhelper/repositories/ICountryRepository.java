package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.CountryEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICountryRepository extends JpaRepository<CountryEntity, Long> {
}
