import React, {Component} from 'react';
import {Grid} from "antd-mobile";

const data = Array.from(new Array(15)).map((_val, i) => ({
    icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
    text: `name${i}`,
}));

class ChomiSearchHistory extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Grid data={data} columnNum={3}/>
            </div>
        )
    }
}

export default ChomiSearchHistory;
