import { ReactNode } from "react";
import styled from "styled-components";

export default function ContentContainer({
  children,
}: {
  children: ReactNode;
}) {
  return <ContentBox>{children}</ContentBox>;
}

const ContentBox = styled.div`
  min-width: 360px;
  max-width: 414px;
  width: 100%;
  height: 80vh;
  border: 1px solid black;
  margin: 0 auto;
`;
