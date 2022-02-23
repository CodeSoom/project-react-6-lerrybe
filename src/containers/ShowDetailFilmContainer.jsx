// import styled from '@emotion/styled';

import { useDispatch } from 'react-redux';

import styled from '@emotion/styled';

import { loadDetailMovieInfo } from '../_actions/actions';
import { loadItem } from '../_services/storage';

import boxoffice from '../img/boxoffice.svg';
import SubIconImg from '../styles/SubIconImg';
import ContainerWrapDiv from '../styles/ContainerWrapDiv';

const ShowTitleWrapDiv = styled.div`
  display: flex;
  width: auto;
  padding-bottom: 20px;
  margin-bottom: 40px;
  border-bottom: 3px solid #FFFFFF;
`;

const ShowTitleDiv = styled.div`
  font-size: 40px;
  display: flex;
  align-items: flex-end;
`;

export default function ShowDetailFilmContainer() {
  const dispatch = useDispatch();
  const movie = loadItem('movie');

  dispatch(loadDetailMovieInfo(movie));

  return (
    <ContainerWrapDiv>
      <ShowTitleWrapDiv>
        <SubIconImg src={boxoffice} alt="boxoffice" />
        <ShowTitleDiv>{movie}</ShowTitleDiv>
      </ShowTitleWrapDiv>

      <div>
        <div>영화 정보</div>
        <div>
          <div>사진</div>
          <div>영화세부내용</div>
        </div>
      </div>

      <div>
        <div>플레이리스트</div>
        <div>ost리스트</div>
      </div>
    </ContainerWrapDiv>
  );
}
