import { useDispatch } from 'react-redux';

import { useState } from 'react';

import { loadDailyBoxOfficeList } from '../_actions/actions';

export default function SelectMovies() {
  const dispatch = useDispatch();

  const [date, setDate] = useState('');
  const [nation, setNation] = useState('K');

  const handleChangeDate = (event) => {
    setDate(event.target.value);
  };

  const handleChangeNation = (event) => {
    setNation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!date) {
      alert('날짜를 선택해주세요.');
      return;
    }
    dispatch(loadDailyBoxOfficeList({
      date: date.replaceAll('-', ''),
      nation,
    }));
  };

  return (
    <div>
      <div>날짜 및 영화 분류를 선택해주세요.</div>
      <input
        type="date"
        value={date}
        onChange={handleChangeDate}
      />

      <select
        name="nation"
        onChange={handleChangeNation}
      >
        <option value="" selected="selected">전체</option>
        <option value="K">한국영화</option>
        <option value="F">외국영화</option>
      </select>

      <button
        type="submit"
        onClick={handleSubmit}
      >
        TOP 10 보기
      </button>
    </div>
  );
}
