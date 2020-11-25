import { fetch } from './csrf';
const GET_BEERS = 'beer/getUser';

const getBeers = (beerList) => {
    return {
        type: GET_BEERS,
        payload: beerList,
    };
};

export const beerThunk = () => async dispatch => {
    const response = await fetch('/api/beers');
    dispatch(getBeers(response.data.beerList));
    return response;
};

const beerReducer = (state = [], action) => {
    switch (action.type) {
        case GET_BEERS:

            return action.payload;
        default:
            return state;
    }
};

export default beerReducer;

// export const login = (user) => async (dispatch) => {
//     const { credential, password } = user;
//     const response = await fetch('/api/session', {
//         method: 'POST',
//         body: JSON.stringify({
//             credential,
//             password,
//         }),
//     });
//     dispatch(setUser(response.data.user));
//     return response;
// };
