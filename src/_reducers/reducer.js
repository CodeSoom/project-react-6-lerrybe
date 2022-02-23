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

  setDetailMovieInfo(state, { payload: { setDetailMovieInfo } }) {
    return {
      ...state,
      setDetailMovieInfo,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
