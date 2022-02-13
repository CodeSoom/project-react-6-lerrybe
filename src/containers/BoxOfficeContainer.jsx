import { useSelector } from 'react-redux';

import { get } from '../utils/utils';

// import styled from '@emotion/styled';

import boxoffice from '../img/boxoffice.svg';

import CenterWrapDiv from '../styles/CenterWrapDiv';
import SubIconImg from '../styles/SubIconImg';
import { ContentsTitleDiv, ContentsTitleWrapDiv } from '../styles/ContentsTitleDiv';
import SelectMovies from '../components/SelectMovies';

export default function BoxOfficeContainer() {
  const dailyBoxOfficeList = useSelector(get('dailyBoxOfficeList'));

  return (
    <>
      <CenterWrapDiv>
        <ContentsTitleWrapDiv>
          <SubIconImg src={boxoffice} alt="boxoffice" />
          <ContentsTitleDiv>Box Office</ContentsTitleDiv>
        </ContentsTitleWrapDiv>

        <SelectMovies />

        <div>
          {dailyBoxOfficeList && dailyBoxOfficeList.length !== 0 ? (
            <ol>
              {dailyBoxOfficeList.map((movie) => (
                <li key={movie.rank}>{`${movie.rank} ${movie.movieNm}`}</li>
              ))}
            </ol>
          ) : (
            <>
              <p>올바른 날짜를 선택해주세요.</p>
              <p>데이터가 없네요 :O</p>
            </>
          )}
        </div>
      </CenterWrapDiv>
    </>
  );
}
