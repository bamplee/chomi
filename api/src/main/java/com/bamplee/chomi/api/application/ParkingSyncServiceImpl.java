package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.seoul.SeoulOpenApiClient;
import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.repository.ParkingInfoRepository;
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
public class ParkingSyncServiceImpl implements ParkingSyncService {
    @Value("${seoul-openapi.key}")
    String key;
    private final MapService mapService;
    private final SeoulOpenApiClient seoulOpenApiClient;
    private final ParkingInfoRepository parkingInfoRepository;

    public ParkingSyncServiceImpl(MapService mapService, SeoulOpenApiClient seoulOpenApiClient,
                                  ParkingInfoRepository parkingInfoRepository) {
        this.mapService = mapService;
        this.seoulOpenApiClient = seoulOpenApiClient;
        this.parkingInfoRepository = parkingInfoRepository;
    }

    @Scheduled(cron = "0 0 0/10 * * *")
    @Override
    public void syncParkingInfoList() {
        int startIndex = 1;
        int endIndex = 1000;
        int pageSize = 1000;
        GetParkInfoResponse result = seoulOpenApiClient.getParkInfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
        int totalSize = result.getParkInfo()
                              .getListTotalCount();
        List<ParkingInfo> parkingInfoList = Lists.newArrayList();
        while (true) {
            GetParkInfoResponse response = seoulOpenApiClient.getParkInfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
            if(ObjectUtils.isNotEmpty(response.getParkInfo())) {
                parkingInfoList = Stream.concat(parkingInfoList.stream(),
                                                Arrays.stream(response.getParkInfo()
                                                                      .getRow())
                                                      .filter(distinctByKey(GetParkInfoResponse.ParkInfo.Row::getParkingCode))
                                                      .map(this::transform))
                                        .collect(Collectors.toList());
            }
            if (endIndex > totalSize) {
                break;
            }
            startIndex += pageSize;
            endIndex += pageSize;
        }
        parkingInfoList = parkingInfoList.stream()
                                         .filter(distinctByKey(ParkingInfo::getParkingCode))
                                         .map(this::setRegionInfo)
                                         .filter(x -> StringUtils.isNotEmpty(x.getSidoName()) || StringUtils.isNotEmpty(x.getGunguName()))
                                         .collect(Collectors.toList());
        System.out.println(parkingInfoRepository.findAll().size());
        parkingInfoRepository.deleteAll();
        System.out.println(parkingInfoRepository.findAll().size());
        parkingInfoRepository.saveAll(parkingInfoList);
        System.out.println(parkingInfoRepository.findAll().size());
        this.clearParkingInfoCache();
    }

    @Cacheable(value = "getParkingInfoList")
    @Override
    public List<ParkingInfo> getParkingInfoList() {
        System.out.println("getParkingInfoList cache");
        return parkingInfoRepository.findAll();
    }

    @CacheEvict(value = "getParkingInfoList")
    @Override
    public void clearParkingInfoCache() {
        System.out.println("getParkingInfoList cache clear..");
    }

    private ParkingInfo setRegionInfo(ParkingInfo parkingInfo) {
        NaverMapsGcResponse na = mapService.gc(parkingInfo.getLng(), parkingInfo.getLat());
        if (na.getResults().length > 0) {
            NaverMapsGcResponse.Result.Region region = na.getResults()[0].getRegion();
            parkingInfo.setSidoName(region.getArea1()
                                          .getName());
            parkingInfo.setGunguName(region.getArea2()
                                           .getName());
            parkingInfo.setDongName(region.getArea3()
                                          .getName());
        }
        return parkingInfo;
    }

    private ParkingInfo transform(GetParkInfoResponse.ParkInfo.Row row) {
        ParkingInfo parkingInfo = new ParkingInfo();
        parkingInfo.setParkingCode(row.getParkingCode());
        parkingInfo.setParkingName(row.getParkingName());
        parkingInfo.setAddr(row.getAddr());
        parkingInfo.setParkingType(row.getParkingType());
        parkingInfo.setParkingTypeNm(row.getParkingTypeNm());
        parkingInfo.setOperationRule(row.getOperationRule());
        parkingInfo.setOperationRuleNm(row.getOperationRuleNm());
        parkingInfo.setTel(row.getTel());
        parkingInfo.setQueStatus(row.getQueStatus());
        parkingInfo.setQueStatusNm(row.getQueStatusNm());
        parkingInfo.setCapacity(row.getCapacity());
        parkingInfo.setCurParking(row.getCurParking());
        parkingInfo.setCurParkingTime(row.getCurParkingTime());
        parkingInfo.setPayYn(row.getPayYn());
        parkingInfo.setPayNm(row.getPayNm());
        parkingInfo.setNightFreeOpen(row.getNightFreeOpen());
        parkingInfo.setNightFreeOpenNm(row.getNightFreeOpenNm());
        parkingInfo.setWeekdayBeginTime(row.getWeekdayBeginTime());
        parkingInfo.setWeekdayEndTime(row.getWeekdayEndTime());
        parkingInfo.setWeekendBeginTime(row.getWeekendBeginTime());
        parkingInfo.setWeekendEndTime(row.getWeekendEndTime());
        parkingInfo.setHolidayBeginTime(row.getHolidayBeginTime());
        parkingInfo.setHolidayEndTime(row.getHolidayEndTime());
        parkingInfo.setSyncTime(row.getSyncTime());
        parkingInfo.setSaturdayPayYn(row.getSaturdayPayYn());
        parkingInfo.setSaturdayPayNm(row.getSaturdayPayNm());
        parkingInfo.setHolidayPayYn(row.getHolidayPayYn());
        parkingInfo.setHolidayPayNm(row.getHolidayPayNm());
        parkingInfo.setFullTimeMonthly(row.getFullTimeMonthly());
        parkingInfo.setGrpParkNm(row.getGrpParkNm());
        parkingInfo.setRates(row.getRates());
        parkingInfo.setTimeRate(row.getTimeRate());
        parkingInfo.setAddRates(row.getAddRates());
        parkingInfo.setAddTimeRate(row.getAddTimeRate());
        parkingInfo.setBusRates(row.getBusRates());
        parkingInfo.setBusTimeRate(row.getBusTimeRate());
        parkingInfo.setBusAddTimeRate(row.getBusAddTimeRate());
        parkingInfo.setBusAddRates(row.getBusAddRates());
        parkingInfo.setDayMaximum(row.getDayMaximum());
        parkingInfo.setLat(row.getLat());
        parkingInfo.setLng(row.getLng());
        parkingInfo.setAssignCode(row.getAssignCode());
        parkingInfo.setAssignCodeNm(row.getAssignCodeNm());
        return parkingInfo;
    }

    public static <T> Predicate<T> distinctByKey(Function<? super T, Object> keyExtractor) {
        Map<Object, Boolean> map = new HashMap<>();
        return t -> map.putIfAbsent(keyExtractor.apply(t), Boolean.TRUE) == null;
    }
}
