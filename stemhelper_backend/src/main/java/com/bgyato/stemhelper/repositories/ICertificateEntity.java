package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.CertificateEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICertificateEntity extends JpaRepository<CertificateEntity, Long> {
}
