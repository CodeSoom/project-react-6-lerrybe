/* eslint-disable no-alert */

import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import { useState } from 'react';

import { loadDailyBoxOfficeList } from '../_actions/actions';

const ContentsSubTitleDiv = styled.div`
  color: #FFD717;
  font-size: 17px;
  margin-bottom: 20px;
`;

const DateNationWrapDiv = styled.div`
  margin-bottom: 40px;
`;

const DateInput = styled.input`
  width: 180px;
  font-size: 17px;
  padding: 5px 5px 5px 10px;
  margin-right: 10px;
  font-family: 'DungGeunMo';
  background-color: #ffffffdd;
`;

const NationSelect = styled.select`
  box-sizing: border-box;
  width: 100px;
  height: 38px;
  padding: 0 5px;
  margin-right: 10px;
  font-size: 17px;
  font-family: 'DungGeunMo';
  background-color: #ffffffdd;
`;

const SubmitButton = styled.button`
  box-sizing: border-box;
  width: 140px;
  height: 38px;
  background: #122157a4;
  border: 3px solid #FFFFFF;
  border-radius: 3px;
  color: white;
  font-size: 20px;
  font-family: 'DungGeunMo';
`;

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
    <DateNationWrapDiv>
      <ContentsSubTitleDiv>날짜 및 영화 분류를 선택해주세요.</ContentsSubTitleDiv>
      <DateInput
        type="date"
        value={date}
        onChange={handleChangeDate}
      />

      <NationSelect
        name="nation"
        onChange={handleChangeNation}
      >
        <option value="" selected="selected">전체</option>
        <option value="F">외국영화</option>
      </NationSelect>

      <SubmitButton
        type="submit"
        onClick={handleSubmit}
      >
        TOP 10 보기
      </SubmitButton>
    </DateNationWrapDiv>
  );
}
