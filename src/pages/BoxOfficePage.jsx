import styled from '@emotion/styled';

import NavigationBar from '../components/NavigationBar';
import PlayDevice from '../components/PlayDevice';
import BoxOfficeContainer from '../containers/BoxOfficeContainer';

const BoxOfficeWrapDiv = styled.div`
  display: flex;
`;

export default function BoxOfficePage() {
  return (
    <BoxOfficeWrapDiv>
      <NavigationBar />
      <BoxOfficeContainer />
      <PlayDevice />
    </BoxOfficeWrapDiv>
  );
}
