import {observable, action} from 'mobx';

class UiStore {
    @observable clickSearchInput = '';

    @action handleClickSearchInput = (clickSearchInput) => {
        this.clickSearchInput = clickSearchInput;
    };
}

export default new UiStore();