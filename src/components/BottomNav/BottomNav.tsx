import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export default function BottomNav() {
  const { pathname } = useLocation();

  if (['/login'].includes(pathname)) {
    return <></>;
  }
  return <NavContainer>BottomNav</NavContainer>;
}

const NavContainer = styled.div`
  width: 100%;
  height: 10%;
  border: 1px solid black;
`;
