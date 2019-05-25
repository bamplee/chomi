package com.bamplee.chomi.api.interfaces.place;

import com.bamplee.chomi.api.application.MapService;
import com.bamplee.chomi.api.datatool.naver.dto.NaverMapsSearchPlacesResponse;
import com.bamplee.chomi.api.datatool.odsay.dto.OdSaySearchPubTransPathResponse;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/maps")
public class MapController {
    private final MapService mapService;

    public MapController(MapService mapService) {
        this.mapService = mapService;
    }

    @GetMapping("search")
    public NaverMapsSearchPlacesResponse search(@RequestParam("query") String query) {
        return mapService.search(query);
    }

    @GetMapping("route")
    public OdSaySearchPubTransPathResponse route(@RequestParam("startX") String startX,
                                                 @RequestParam("startY") String startY,
                                                 @RequestParam("endX") String endX,
                                                 @RequestParam("endY") String endY) {
        return mapService.route(startX, startY, endX, endY);
    }
}
