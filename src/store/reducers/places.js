import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const intialState = {
    places: []
};

function reducer(state = intialState, action) {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat(
                    {
                      key: Math.random(), 
                      name: action.placeName,
                      image: placeImage
                    })
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                  })
            }
        default:
            return state;
    }
};

export default reducer;