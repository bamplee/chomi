package com.bamplee.chomi.api.datatool.naver;

import feign.RequestInterceptor;
import feign.RequestTemplate;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class NaverClientInterceptor implements RequestInterceptor {
    @Value("${naver-maps.id}")
    private String id;
    @Value("${naver-maps.secret}")
    private String secret;

    @Override
    public void apply(RequestTemplate template) {
        template.header("X-NCP-APIGW-API-KEY-ID", id);
        template.header("X-NCP-APIGW-API-KEY", secret);
    }
}
