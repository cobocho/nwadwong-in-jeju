import styled from 'styled-components';
import MapHeader from './MapHeader';

export default function Header() {
  return (
    <HeaderContainer>
      <MapHeader />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  width: 100%;
  height: fit-content;
`;
