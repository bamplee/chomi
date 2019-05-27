import React from 'react';
import { Marker, NaverMap, RenderAfterNavermapsLoaded } from 'react-naver-maps'

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
                marginTop: 5,
                width: '100%',
                height: window.innerHeight - 423,
            }}
            center={{lat: props.center.lat, lng: props.center.lng}}
            defaultZoom={5}
          >
              <Marker
                title={'abcd'}
                position={{lat: props.startY, lng: props.startX}}
              />
              <Marker
                position={{lat: props.endY, lng: props.endX}}
              />
          </NaverMap>
      </RenderAfterNavermapsLoaded>
    );
}

export default (MapView);
