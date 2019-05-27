import { observable, action } from 'mobx';

class UiStore {
    @observable clickSearchInput = '';

    @action handleDepartureInput = () => {
        this.clickSearchInput = 'departure';
    };

    @action handleDestinationInput = () => {
        this.clickSearchInput = 'destination';
    };
}

export default new UiStore();