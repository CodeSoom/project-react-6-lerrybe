import fetchDailyBoxOfficeList from '../_services/api';
import { saveItem } from '../_services/storage';

export function login(inputUsername) {
  saveItem('name', inputUsername);
  return {
    type: 'login',
    payload: { inputUsername },
  };
}

export function setDailyBoxOfficeList(dailyBoxOfficeList) {
  return {
    type: 'setDailyBoxOfficeList',
    payload: { dailyBoxOfficeList },
  };
}

export function loadDailyBoxOfficeList({ date, nation }) {
  return async (dispatch) => {
    const data = await fetchDailyBoxOfficeList({ date, nation });
    const { dailyBoxOfficeList } = data.boxOfficeResult;
    dispatch(setDailyBoxOfficeList(dailyBoxOfficeList));
  };
}
