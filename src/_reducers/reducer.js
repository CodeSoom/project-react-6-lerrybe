const initialState = {

};

const reducers = {
  login(state, { payload: { inputUsername } }) {
    return {
      ...state,
      inputUsername,
    };
  },

  setDailyBoxOfficeList(state, { payload: { dailyBoxOfficeList } }) {
    return {
      ...state,
      dailyBoxOfficeList,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
