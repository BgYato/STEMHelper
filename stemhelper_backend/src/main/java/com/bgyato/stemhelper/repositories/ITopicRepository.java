package com.bgyato.stemhelper.repositories;

import com.bgyato.stemhelper.models.entities.TopicEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITopicRepository extends JpaRepository<TopicEntity, Long> {
}
