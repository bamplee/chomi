import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import SearchDepartureBar from './bar/SearchDepartureBar';
import SearchDestinationBar from './bar/SearchDestinationBar';
import SearchDepartureTable from './table/SearchDepartureTable';
import SearchDestinationTable from './table/SearchDestinationTable';

import './search.css';
import {Conditional} from '../common/Conditional';

@inject('searchStore')
@observer
class SearchContainer extends Component {
    render() {
        const {searchStore} = this.props;
        const {history} = this.props;
        return (
            <React.Fragment>
                <Conditional if={searchStore.type === 'departure'}>
                    <SearchDepartureBar history={history}/>
                    <SearchDepartureTable history={history}/>
                </Conditional>
                <Conditional if={searchStore.type === '' || searchStore.type === 'destination'}>
                    <SearchDestinationBar history={history}/>
                    <SearchDestinationTable history={history}/>
                </Conditional>
            </React.Fragment>
        );
    }
}

export default SearchContainer;
