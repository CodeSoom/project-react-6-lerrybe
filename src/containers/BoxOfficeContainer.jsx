import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

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
  color: #d7dfeb;
  margin-bottom: 23px;
`;

const StyledLink = styled(Link)`
  color: #d7dfeb;
  &:hover {
    color: #FFD717;
  }
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
              <MovieList key={movie.rank}>
                <StyledLink to={`/show/${movie.movieNm.replace(/ /gi, '')}`}>
                  {`${movie.rank}) ${movie.movieNm}`}
                </StyledLink>
              </MovieList>
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
