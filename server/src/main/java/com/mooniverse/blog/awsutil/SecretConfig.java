package com.mooniverse.blog.awsutil;
import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

@Component
public class SecretConfig {
    private final SecretManagerService secretManagerService;

    public SecretConfig(SecretManagerService secretManagerService) {
        this.secretManagerService = secretManagerService;
    }

    @PostConstruct
    public void inti(){
        String jwtSecret = secretManagerService.getSecretKey("JWT_SECRET_KEY");
        System.setProperty("JWT_SECRET_KEY", jwtSecret);
    }
}
