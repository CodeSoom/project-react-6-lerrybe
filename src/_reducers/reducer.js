const initialState = {

};

const reducers = {
  login(state, { payload: { inputUsername } }) {
    return {
      ...state,
      inputUsername,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
