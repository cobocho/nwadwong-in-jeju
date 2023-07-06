import styled from "styled-components";
import CommentInput from "./components/CommentInput";
import CommentList from "./components/CommentList";
import { useRecoilValue } from "recoil";
import { detailState } from "../../recoil/detailState";

export default function Comments() {
  const detail = useRecoilValue(detailState);

  return (
    <>
      <CommentNumber>댓글 {detail?.totalComments}</CommentNumber>
      <CommentInput />
      <CommentList />
    </>
  );
}

const CommentNumber = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.25rem;
  font-weight: 600;
`;
