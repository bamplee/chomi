package com.bamplee.chomi.api.application;

import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsGcResponse;
import com.bamplee.chomi.api.datatool.seoul.SeoulOpenApiClient;
import com.bamplee.chomi.api.datatool.seoul.dto.GetParkInfoResponse;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.entity.ParkingInfo;
import com.bamplee.chomi.api.infrastructure.persistence.jpa.repository.ParkingInfoRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public void syncParkingInfoList() {
        int startIndex = 1;
        int endIndex = 1000;
        int pageSize = 1000;

        GetParkInfoResponse result = seoulOpenApiClient.getParkInfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
        int totalSize = result.getParkInfo().getListTotalCount();
        while (true) {
            System.out.println(startIndex);
            System.out.println(endIndex);

            GetParkInfoResponse response = seoulOpenApiClient.getParkInfo(key, String.valueOf(startIndex), String.valueOf(endIndex));
            List<ParkingInfo> parkingInfoList = Arrays.stream(response.getParkInfo().getRow())
                                                      .map(this::transform)
                                                      .collect(Collectors.toList());

            for (int i = 0; i < parkingInfoList.size(); i++) {
                ParkingInfo parkingInfo = parkingInfoList.get(i);
                NaverMapsGcResponse na = mapService.gc(parkingInfo.getLng(), parkingInfo.getLat());
                if (na.getResults().length > 0) {
                    NaverMapsGcResponse.Result.Region region = na.getResults()[0].getRegion();
                    parkingInfo.setSidoName(region.getArea1().getName());
                    parkingInfo.setGunguName(region.getArea2().getName());
                    parkingInfo.setDongName(region.getArea3().getName());
                }
                parkingInfo.setId((long) (i + startIndex));
            }
            parkingInfoRepository.saveAll(parkingInfoList);
            if (endIndex > totalSize) {
                break;
            }
            startIndex += pageSize;
            endIndex += pageSize;
        }

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
}
