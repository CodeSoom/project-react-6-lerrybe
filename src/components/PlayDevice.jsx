import styled from '@emotion/styled';
import { ContentsTitleDiv } from '../styles/ContentsTitleDiv';

const PlayDevicediv = styled.div`
  width: 30%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.23);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  padding: 60px 2% 2% 2%;
`;

const PlaythumbDiv = styled.div`
  width: 90%;
  height: 45%;
  border: 4px solid white;
  box-sizing: border-box;
  margin: 50px 0 30px 0;
`;

export default function PlayDevice() {
  return (
    <PlayDevicediv>
      <ContentsTitleDiv>Playing OST</ContentsTitleDiv>

      <PlaythumbDiv>
        {/* 이미지 */}
      </PlaythumbDiv>

    </PlayDevicediv>
  );
}
