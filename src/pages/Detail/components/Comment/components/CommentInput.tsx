import styled from "styled-components";

export default function CommentInput() {
  return (
    <CommentInputContainer>
      <UserAvatar>사</UserAvatar>
      <CommentInputPlace
        type="text"
        placeholder="댓글을 입력해 주세요."
      ></CommentInputPlace>
      <SubmitButton>등록</SubmitButton>
    </CommentInputContainer>
  );
}
const CommentInputContainer = styled.div`
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const UserAvatar = styled.div`
  width: 35px;
  height: 35px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentInputPlace = styled.input`
  width: 75%;
`;
const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
