import { ReactNode } from 'react';
import styled from 'styled-components';

export default function ScreenContainer({ children }: { children: ReactNode }) {
  return <ContainerBox>{children}</ContainerBox>;
}

const ContainerBox = styled.div`
  min-width: 360px;
  max-width: 414px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
