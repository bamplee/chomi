import React from 'react';
import {Marker, NaverMap, RenderAfterNavermapsLoaded} from 'react-naver-maps'

function MapView(props) {
    return (
      <RenderAfterNavermapsLoaded
        // fixme ncpClientId 의 경우 허용 도메인 수정 필요
        ncpClientId={'epit1z6yed'}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
          <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '100%',
                height: props.height,
            }}
            defaultCenter={{lat: props.lat, lng: props.lng}}
            defaultZoom={10}
          >
              <Marker
                  position={{lat: props.lat, lng: props.lng}}
              />
          </NaverMap>
      </RenderAfterNavermapsLoaded>
    );
}

export default (MapView);
