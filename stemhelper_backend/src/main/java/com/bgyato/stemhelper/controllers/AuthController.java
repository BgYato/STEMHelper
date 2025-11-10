package com.bgyato.stemhelper.controllers;

import com.bgyato.stemhelper.models.entities.UserEntity;
import com.bgyato.stemhelper.repositories.IUserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import org.mindrot.jbcrypt.BCrypt;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class AuthController {

    private final IUserRepository userRepository;

    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody Map<String, String> request) {
        String email = request.get("email");
        String password = request.get("password");

        Map<String, Object> response = new HashMap<>();

        UserEntity user = userRepository.findByEmail(email);

        if (user == null) {
            response.put("success", false);
            response.put("message", "Usuario no encontrado");
            return response;
        }

        // Validar hash bcrypt (si las contraseñas están guardadas así)
        boolean validPassword = BCrypt.checkpw(password, user.getPassword());

        if (!validPassword) {
            response.put("success", false);
            response.put("message", "Contraseña incorrecta");
            return response;
        }

        response.put("success", true);
        response.put("message", "Inicio de sesión exitoso");
        response.put("user", user);
        return response;
    }
}
