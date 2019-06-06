import RouteStore from './RouteStore';
import SearchStore from './SearchStore';

class RootStore {
    constructor() {
        this.routeStore = new RouteStore(this);
        this.searchStore = new SearchStore(this);
    }
}

export default RootStore;