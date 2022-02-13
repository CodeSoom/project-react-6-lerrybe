import { useSelector } from 'react-redux';

import styled from '@emotion/styled';

import { get } from '../utils/utils';

import boxoffice from '../img/boxoffice.svg';

import ContainerWrapDiv from '../styles/ContainerWrapDiv';
import SubIconImg from '../styles/SubIconImg';
import { ContentsTitleDiv, ContentsTitleWrapDiv } from '../styles/ContentsTitleDiv';
import SelectMovies from '../components/SelectMovies';

const InnerContainerDiv = styled.div`
  box-sizing: border-box;
  padding-left: 10px;
`;

const MovieList = styled.li`
  font-size: 25px;
  font-weight: 600;
  font-family: DungGeunMo;
  /* color: #000000; */
  color: #d7dfeb;
  /* text-shadow: -1.5px 0 white, 0 1.5px white, 1.5px 0 white, 0 -1.5px white; */
  margin-bottom: 23px;
`;

export default function BoxOfficeContainer() {
  const dailyBoxOfficeList = useSelector(get('dailyBoxOfficeList'));

  return (
    <ContainerWrapDiv>
      <ContentsTitleWrapDiv>
        <SubIconImg src={boxoffice} alt="boxoffice" />
        <ContentsTitleDiv>Box Office</ContentsTitleDiv>
      </ContentsTitleWrapDiv>

      <SelectMovies />

      <InnerContainerDiv>
        {dailyBoxOfficeList && dailyBoxOfficeList.length !== 0 ? (
          <ol>
            {dailyBoxOfficeList.map((movie) => (
              <MovieList key={movie.rank}>{`${movie.rank}) ${movie.movieNm}`}</MovieList>
            ))}
          </ol>
        ) : (
          <ol>
            <MovieList>
              올바른 날짜를 선택해주세요.
            </MovieList>
            <MovieList>
              데이터가 없네요 :O
            </MovieList>
          </ol>
        )}
      </InnerContainerDiv>
    </ContainerWrapDiv>
  );
}
