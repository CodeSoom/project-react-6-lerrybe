import search from '../img/search.svg';

import ContainerWrapDiv from '../styles/ContainerWrapDiv';
import { ContentsTitleDiv, ContentsTitleWrapDiv } from '../styles/ContentsTitleDiv';
import SubIconImg from '../styles/SubIconImg';

export default function SearchFilmContainer() {
  return (
    <ContainerWrapDiv>
      <ContentsTitleWrapDiv>
        <SubIconImg src={search} alt="search" />
        <ContentsTitleDiv>Search Movie</ContentsTitleDiv>
      </ContentsTitleWrapDiv>

      <div>
        <div>찾고 싶은 영화를 검색하세요!</div>
        <div>
          <div>input 창</div>
        </div>
      </div>

      <div>
        결과 list
      </div>
    </ContainerWrapDiv>
  );
}
