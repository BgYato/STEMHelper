package com.bgyato.stemhelper;

import org.mindrot.jbcrypt.BCrypt;

public class HashGenerator {
    public static void main(String[] args) {
        String plain = "example"; // la contraseña que quieras darle
        String hash = BCrypt.hashpw(plain, BCrypt.gensalt(12)); // 12 rounds recomendado
        System.out.println("Plain: " + plain);
        System.out.println("Hash: " + hash);
    }
}
