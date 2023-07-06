import styled from "styled-components";
import Comment from "./components/Comment";
import CommentInput from "./components/CommentInput";

export default function Comments() {
  return (
    <>
      <CommentNumber>댓글 14</CommentNumber>
      <CommentInput />
      <CommentList>
        <Comment />
      </CommentList>
    </>
  );
}

const CommentNumber = styled.p`
  padding: 0 1.25rem;
  font-size: 1.25rem;
  font-weight: 600;
`;

const CommentList = styled.div``;
