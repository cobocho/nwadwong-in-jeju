import { ReactNode } from 'react';
import styled from 'styled-components';

export default function ContentContainer({ children }: { children: ReactNode }) {
  return <ContentBox>{children}</ContentBox>;
}

const ContentBox = styled.div`
  position: relative;
  min-width: 360px;
  max-width: 414px;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 0 20px;
`;
