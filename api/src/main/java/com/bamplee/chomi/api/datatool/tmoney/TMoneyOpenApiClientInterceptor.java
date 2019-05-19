package com.bamplee.chomi.api.datatool.tmoney;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;

@Component
public class TMoneyOpenApiClientInterceptor implements RequestInterceptor {
    @Value("${tmoney-openapi.key}")
    private String key;

    @Override
    public void apply(RequestTemplate template) {
        template.header("Content-Type", MediaType.APPLICATION_FORM_URLENCODED_VALUE);
        template.header("x-Gateway-APIKey", key);
    }
}
