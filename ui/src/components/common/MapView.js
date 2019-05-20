import React from 'react';
import {NaverMap, RenderAfterNavermapsLoaded} from 'react-naver-maps'

function MapView(props) {
    return (
      <RenderAfterNavermapsLoaded
        // fixme ncpClientId 의 경우 허용 도메인 수정 필요
        ncpClientId={props.ncpClientId}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
          <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '100%',
                height: '400px',
            }}
            defaultCenter={{lat: 37.3595704, lng: 127.105399}}
            defaultZoom={10}
          />
      </RenderAfterNavermapsLoaded>
    );
}

export default (MapView);
