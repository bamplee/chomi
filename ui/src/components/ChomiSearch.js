import React, {Component} from 'react';
import {Card, Carousel, Icon, List, SearchBar, Steps, WhiteSpace, WingBlank} from "antd-mobile";

const steps = [{
    title: '그린팩토리',
    description: '출발지',
}, {
    title: '서울역',
    description: '목적지',
}].map((s, i) => <Steps.Step icon={<Icon type={'check-circle-o'}/>} key={i} title={s.title}
                             description={s.description}/>);

class ChomiSearch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchBar
                    placeholder="Search"
                    onSubmit={value => console.log(value, 'onSubmit')}
                    onClear={value => console.log(value, 'onClear')}
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onCancel={() => console.log('onCancel')}
                    showCancelButton
                />
                <WhiteSpace size="xl"/>
                <WingBlank size="lg">
                    <Steps current={1} direction="horizontal" size="small">{steps}</Steps>
                </WingBlank>
                <WhiteSpace size="xl"/>
            </div>
        )
    }
}

export default ChomiSearch;
