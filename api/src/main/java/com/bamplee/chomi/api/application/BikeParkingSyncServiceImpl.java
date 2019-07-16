package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.seoul.SeoulOpenApiClient;
import com.bamplee.chomi.api.datatool.seoul.dto.BikeListResponse;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.BikeParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.repository.BikeParkingInfoRepository;
import com.google.common.collect.Lists;
import org.apache.commons.lang.StringUtils;
import org.apache.commons.lang3.ObjectUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@Service
public class BikeParkingSyncServiceImpl implements BikeParkingSyncService {
    @Value("${seoul-openapi.key}")
    String key;
    private final MapService mapService;
    private final SeoulOpenApiClient seoulOpenApiClient;
    private final BikeParkingInfoRepository bikeParkingInfoRepository;

    public BikeParkingSyncServiceImpl(MapService mapService,
                                      SeoulOpenApiClient seoulOpenApiClient,
                                      BikeParkingInfoRepository bikeParkingInfoRepository) {
        this.mapService = mapService;
        this.seoulOpenApiClient = seoulOpenApiClient;
        this.bikeParkingInfoRepository = bikeParkingInfoRepository;
    }

    @Scheduled(cron = "0 0 0/5 * * *")
    @Override
    public void syncBikeParkingInfoList() {
        int startIndex = 1;
        int endIndex = 1000;
        int pageSize = 1000;
        BikeListResponse result = seoulOpenApiClient.publicBicycleRenTIdinfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
        int totalSize = result.getRentBikeStatus()
                              .getListTotalCount();
        List<BikeParkingInfo> bikeParkingInfoList = Lists.newArrayList();
        while (true) {
            BikeListResponse response = seoulOpenApiClient.publicBicycleRenTIdinfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
            if(ObjectUtils.isNotEmpty(response.getRentBikeStatus())) {
                bikeParkingInfoList = Stream.concat(bikeParkingInfoList.stream(),
                                                Arrays.stream(response.getRentBikeStatus().getRow())
                                                      .filter(distinctByKey(BikeListResponse.RentBikeStatus.Row::getStationId))
                                                      .map(this::transform)).collect(Collectors.toList());
            }
            if (endIndex > totalSize) {
                break;
            }
            startIndex += pageSize;
            endIndex += pageSize;
        }
        bikeParkingInfoList = bikeParkingInfoList.stream()
                                         .filter(distinctByKey(BikeParkingInfo::getStationId))
                                         .map(this::setRegionInfo)
                                         .filter(x -> StringUtils.isNotEmpty(x.getSidoName()) || StringUtils.isNotEmpty(x.getGunguName()))
                                         .collect(Collectors.toList());
        System.out.println(bikeParkingInfoRepository.findAll().size());
        bikeParkingInfoRepository.deleteAll();
        System.out.println(bikeParkingInfoRepository.findAll().size());
        bikeParkingInfoRepository.saveAll(bikeParkingInfoList);
        System.out.println(bikeParkingInfoRepository.findAll().size());
        this.clearBikeParkingInfoCache();
    }

    @CacheEvict(value = "getBikeParkingInfoList")
    @Override
    public void clearBikeParkingInfoCache() {
        System.out.println("getBikeParkingInfoList cache clear..");
    }

    @Cacheable(value = "getBikeParkingInfoList")
    @Override
    public List<BikeParkingInfo> getBikeParkingInfoList() {
        return bikeParkingInfoRepository.findAll();
    }

    private BikeParkingInfo transform(BikeListResponse.RentBikeStatus.Row bikeListResponse) {
        BikeParkingInfo bikeParkingInfo = new BikeParkingInfo();
        bikeParkingInfo.setRackTotCnt(bikeListResponse.getRackTotCnt());
        bikeParkingInfo.setStationName(bikeListResponse.getStationName());
        bikeParkingInfo.setParkingBikeTotCnt(bikeListResponse.getParkingBikeTotCnt());
        bikeParkingInfo.setShared(bikeListResponse.getShared());
        bikeParkingInfo.setStationLatitude(bikeListResponse.getStationLatitude());
        bikeParkingInfo.setStationLongitude(bikeListResponse.getStationLongitude());
        bikeParkingInfo.setStationId(bikeListResponse.getStationId());
        return bikeParkingInfo;
    }

    private BikeParkingInfo setRegionInfo(BikeParkingInfo bikeParkingInfo) {
        NaverMapsGcResponse na = mapService.gc(bikeParkingInfo.getStationLongitude(), bikeParkingInfo.getStationLatitude());
        if (na.getResults().length > 0) {
            NaverMapsGcResponse.Result.Region region = na.getResults()[0].getRegion();
            bikeParkingInfo.setSidoName(region.getArea1()
                                          .getName());
            bikeParkingInfo.setGunguName(region.getArea2()
                                           .getName());
            bikeParkingInfo.setDongName(region.getArea3()
                                          .getName());
        }
        return bikeParkingInfo;
    }

    public static <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {
        Map<Object, Boolean> map = new HashMap<>();
        return t -> map.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }
}
