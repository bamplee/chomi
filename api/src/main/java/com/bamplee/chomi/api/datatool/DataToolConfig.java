package com.bamplee.chomi.api.datatool;

import com.bamplee.chomi.api.datatool.seoul.SeoulOpenApiClient;
import com.bamplee.chomi.api.datatool.seoul.SeoulSWOpenApiClient;
import com.bamplee.chomi.api.datatool.tmoney.TMoneyOpenApiClient;
import com.bamplee.chomi.api.datatool.tmoney.TMoneyOpenApiClientInterceptor;
import feign.Feign;
import feign.Retryer;
import feign.jackson.JacksonDecoder;
import feign.jaxb.JAXBContextFactory;
import feign.jaxb.JAXBDecoder;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.cloud.openfeign.support.SpringMvcContract;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import static org.apache.commons.lang.CharEncoding.UTF_8;

@EnableFeignClients
@Configuration
public class DataToolConfig {
    @Bean
    public SeoulSWOpenApiClient seoulSWOpenApiClient() {
        return Feign.builder()
                    .decoder(new JAXBDecoder(new JAXBContextFactory.Builder()
                                                 .withMarshallerJAXBEncoding(UTF_8)
                                                 .build()))
                    .contract(new SpringMvcContract())
                    .retryer(new Retryer.Default())
                    .target(SeoulSWOpenApiClient.class, "seoul-sw-openapi");
    }

    @Bean
    public SeoulOpenApiClient seoulOpenApiClient() {
        return Feign.builder()
                    .decoder(new JacksonDecoder())
                    .contract(new SpringMvcContract())
                    .retryer(new Retryer.Default())
                    .target(SeoulOpenApiClient.class, "seoul-openapi");
    }

    @Bean
    public TMoneyOpenApiClient tMoneyOpenApiClient() {
        return Feign.builder()
                    .decoder(new JAXBDecoder(new JAXBContextFactory.Builder()
                                                 .withMarshallerJAXBEncoding(UTF_8)
                                                 .build()))
                    .requestInterceptor(new TMoneyOpenApiClientInterceptor())
                    .contract(new SpringMvcContract())
                    .retryer(new Retryer.Default())
                    .target(TMoneyOpenApiClient.class, "tmoney-openapi");
    }
}
