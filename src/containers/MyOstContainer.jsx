import myost from '../img/myost.svg';

import ContainerWrapDiv from '../styles/ContainerWrapDiv';
import { ContentsTitleDiv, ContentsTitleWrapDiv } from '../styles/ContentsTitleDiv';
import SubIconImg from '../styles/SubIconImg';

export default function MyOstContainer() {
  return (
    <ContainerWrapDiv>
      <ContentsTitleWrapDiv>
        <SubIconImg src={myost} alt="myost" />
        <ContentsTitleDiv>My Ost</ContentsTitleDiv>
      </ContentsTitleWrapDiv>

      <div>내가 좋아하는 OST</div>
      <div>리스트</div>
    </ContainerWrapDiv>
  );
}
