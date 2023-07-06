import styled from "styled-components";

export default function Comment() {
  return (
    <>
      <CommentBox>
        <CommentHeader>
          <CommentLeft>
            <CommentUser>username</CommentUser>
            <DivideDot>·</DivideDot>
            <CreatedAt>3일 전</CreatedAt>
          </CommentLeft>
          <CommentRight>
            <DropDownBtn>···</DropDownBtn>
          </CommentRight>
        </CommentHeader>
        <CommentContent>안녕하세요.</CommentContent>
      </CommentBox>
      <CommentBox>
        <CommentHeader>
          <CommentLeft>
            <CommentUser>username</CommentUser>
            <DivideDot>·</DivideDot>
            <CreatedAt>3일 전</CreatedAt>
          </CommentLeft>
          <CommentRight>
            <DropDownBtn>···</DropDownBtn>
          </CommentRight>
        </CommentHeader>
        <CommentContent>안녕하세요.</CommentContent>
      </CommentBox>
    </>
  );
}

const CommentBox = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid gray;
`;

const CommentLeft = styled.div`
  display: flex;
  align-items: center;
`;

const CommentRight = styled.div`
  display: flex;
  align-items: center;
`;

const CommentHeader = styled.div`
  padding-bottom: 1.25rem;
  display: flex;
  justify-content: space-between;
`;

const CommentUser = styled.div``;

const DivideDot = styled.div`
  padding: 0 0.5rem;
`;

const CreatedAt = styled.div`
  color: gray;
`;

const DropDownBtn = styled.div``;

const CommentContent = styled.div``;
