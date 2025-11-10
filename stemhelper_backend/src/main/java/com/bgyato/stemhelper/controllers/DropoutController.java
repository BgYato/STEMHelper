package com.bgyato.stemhelper.controllers;

import com.bgyato.stemhelper.models.entities.DropoutEntity;
import com.bgyato.stemhelper.services.DropoutServiceImpl;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/dropouts")
@AllArgsConstructor
@CrossOrigin("*")
public class DropoutController {

    private final DropoutServiceImpl dropoutService;

    @PostMapping("")
    public ResponseEntity<DropoutEntity> createDropout(@RequestBody DropoutEntity dropout) {
        return ResponseEntity.status(HttpStatus.CREATED).body(dropoutService.save(dropout));
    }

    @PutMapping("/{id}")
    public ResponseEntity<DropoutEntity> updateDropout(@PathVariable Long id, @RequestBody DropoutEntity dropout) {
        return dropoutService.findById(id)
                .map(existing -> {
                    existing.setCause(dropout.getCause());
                    existing.setDescription(dropout.getDescription());
                    existing.setDate(dropout.getDate());
                    return ResponseEntity.ok(dropoutService.save(existing));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("")
    public ResponseEntity<List<DropoutEntity>> getAllDropouts() {
        return ResponseEntity.ok(dropoutService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<DropoutEntity> getDropoutById(@PathVariable Long id) {
        return dropoutService.findById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDropout(@PathVariable Long id) {
        if (dropoutService.findById(id).isEmpty()) return ResponseEntity.notFound().build();
        dropoutService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
