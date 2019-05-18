package com.bamplee.chomi.api.datatool.common;

import feign.hystrix.FallbackFactory;
import org.slf4j.Logger;

import static org.apache.commons.lang.StringUtils.containsIgnoreCase;

public interface LoggingFallbackFactory<T> extends FallbackFactory<T> {
    @Override
    default T create(Throwable cause) {
        if (containsIgnoreCase(cause.toString(), "Hystrix circuit short-circuited and is OPEN")) {
            logger().error("[CRITICAL] FALLBACK {}", cause.toString());
            return fallback();
        }
        logger().error("FALLBACK {}", cause.toString());
        return fallback();
    }

    T fallback();

    Logger logger();
}