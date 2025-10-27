package com.bgyato.stemhelper.models.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import java.time.Instant;

@Getter
@Setter
@Entity
@Table(name = "password_history")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class PasswordHistoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "old_password", nullable = false)
    private String oldPassword;

    @ColumnDefault("current_timestamp()")
    @Column(name = "changed_at", nullable = false)
    private Instant changedAt;

}