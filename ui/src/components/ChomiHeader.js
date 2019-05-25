import React, {Component} from 'react';
import {Grid, Icon, NavBar, SearchBar, Steps, WhiteSpace, WingBlank} from "antd-mobile";

class ChomiHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavBar
                mode="light"
                rightContent={[
                    <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    <Icon key="1" type="ellipsis"/>,
                ]}
            >chomi</NavBar>
        )
    }
}

export default ChomiHeader;
