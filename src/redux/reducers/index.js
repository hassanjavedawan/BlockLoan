/** @format */

// redux/reducers/countReducer.js
const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  console.log('reducers  |==>', action);
  switch (action.type) {
    case 'LOADING':
      return {
        ...state,
        loading: action.payload.loading,
      };

    default:
      return state;
  }
};
