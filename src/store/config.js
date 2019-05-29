import { createStore, combineReducers } from 'redux';
import placesReducer from './reducers/places'


const rootReducer = combineReducers({
    places: placesReducer
});

function configStore() {
    return createStore(rootReducer);
}

export default configStore;