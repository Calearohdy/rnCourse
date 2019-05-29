import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export function addPlace(placeName) {
    return {
        type: ADD_PLACE,
        placeName: placeName
    }
}

export function deletePlace(key) {
    return {
        type: DELETE_PLACE,
        placeKey: key
    }
}