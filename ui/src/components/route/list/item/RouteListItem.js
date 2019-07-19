import {Icon, List, Skeleton, Timeline, Typography} from "antd";
import React from "react";
import TimeRow from "./row/TimeRow";
import TitleRow from "./row/TitleRow";
import PathRow from "./row/PathRow";

import './RouteListItem.scss';

function RouteListItem(props) {
    return (
        <List.Item className="route-list-item"
                   onClick={props.loadLane}>
            <Skeleton loading={props.loading} active>
                <List.Item.Meta title={
                    <TitleRow item={props.item}/>
                }
                                description={
                                    <React.Fragment>
                                        <TimeRow item={props.item}/>
                                        <PathRow item={props.item}/>
                                    </React.Fragment>
                                }
                />
            </Skeleton>
        </List.Item>
    )
}

export default RouteListItem;