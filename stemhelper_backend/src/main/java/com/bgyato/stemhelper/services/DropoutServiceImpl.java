package com.bgyato.stemhelper.services;

import com.bgyato.stemhelper.models.entities.DropoutEntity;
import com.bgyato.stemhelper.repositories.IDropoutRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class DropoutServiceImpl {

    private final IDropoutRepository dropoutRepository;

    public List<DropoutEntity> findAll() {
        return dropoutRepository.findAll();
    }

    public Optional<DropoutEntity> findById(Long id) {
        return dropoutRepository.findById(id);
    }

    public DropoutEntity save(DropoutEntity dropout) {
        return dropoutRepository.save(dropout);
    }

    public void delete(Long id) {
        dropoutRepository.deleteById(id);
    }
}
