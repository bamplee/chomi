package com.bamplee.chomi.api.infrastructure;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories("com.bamplee.chomi.api")
@EnableJpaAuditing
public class InfrastructureConfig {
}