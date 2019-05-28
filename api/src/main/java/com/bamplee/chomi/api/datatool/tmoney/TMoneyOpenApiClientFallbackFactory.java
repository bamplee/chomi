package com.bamplee.chomi.api.datatool.tmoney;

import com.bamplee.chomi.api.datatool.common.LoggingFallbackFactory;
import com.bamplee.chomi.api.datatool.tmoney.dto.BsBikeRentIdGetResponse;
import org.slf4j.Logger;
import org.springframework.stereotype.Component;

@Component
public class TMoneyOpenApiClientFallbackFactory implements LoggingFallbackFactory<TMoneyOpenApiClient> {
    private static final TMoneyOpenApiClient FALLBACK = new TMoneyOpenApiClientFallbackFactory.TMoneyOpenApiClientFallback();

    @Override
    public TMoneyOpenApiClient fallback() {
        return FALLBACK;
    }

    @Override
    public Logger logger() {
        return null;
    }

    public static class TMoneyOpenApiClientFallback implements TMoneyOpenApiClient {
        @Override
        public BsBikeRentIdGetResponse bsBikeRentIdGet(String rentId) {
            return null;
        }
    }
}
