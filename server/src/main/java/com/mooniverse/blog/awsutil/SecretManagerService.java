package com.mooniverse.blog.awsutil;

import org.springframework.stereotype.Service;

import software.amazon.awssdk.services.secretsmanager.SecretsManagerClient;
import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueRequest;
import software.amazon.awssdk.services.secretsmanager.model.GetSecretValueResponse;
import software.amazon.awssdk.services.secretsmanager.model.SecretsManagerException;

@Service
public class SecretManagerService {
    private final SecretsManagerClient secretManager = SecretsManagerClient.create();

    public String getSecretKey(String secretName) {
        try {
            GetSecretValueRequest getSecretValueRequest = GetSecretValueRequest.builder()
                    .secretId(secretName)
                    .build();
            GetSecretValueResponse getSecretValueResponse = secretManager.getSecretValue(getSecretValueRequest);

            return getSecretValueResponse.secretString();
        } catch (SecretsManagerException e) {
            throw new RuntimeException("Error retrieving secret from AWS Secrets Manager", e);
        }
    }
}