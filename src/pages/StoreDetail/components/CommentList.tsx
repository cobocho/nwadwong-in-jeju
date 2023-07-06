import { useRecoilValue } from "recoil";

import styled from "styled-components";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import { commentDataState } from "../../../recoil/commentState";

export function displayCreatedAt(created_at: string) {
  const milliSeconds: number =
    new Date().getTime() - new Date(created_at).getTime();
  const seconds = milliSeconds / 1000;
  if (seconds < 60) return `방금 전`;
  const minutes = seconds / 60;
  if (minutes < 60) return `${Math.floor(minutes)}분 전`;
  const hours = minutes / 60;
  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  } else {
    return (
      <span>
        {created_at.split("T")[0]}&nbsp;&nbsp;
        {created_at.split("T")[1].split(":")[0]}:
        {created_at.split("T")[1].split(":")[1]}
      </span>
    );
  }
}

export default function CommentList() {
  const commentData = useRecoilValue(commentDataState);
  return (
    <div>
      {commentData?.map((item, idx) => {
        return (
          <CommentBox key={idx}>
            <CommentHeader>
              <CommentLeft>
                <CommentUser>{item.commentNickname}</CommentUser>
                <DivideDot>·</DivideDot>
                <CreatedAt>
                  {item.createdAt && displayCreatedAt(item.createdAt)}
                </CreatedAt>
              </CommentLeft>
              <CommentRight>
                <Delete />
              </CommentRight>
            </CommentHeader>
            <CommentContent>{item.content}</CommentContent>
          </CommentBox>
        );
      })}
    </div>
  );
}

const CommentBox = styled.div`
  padding: 1.25rem;
  border-bottom: 1px solid gray;
`;

const CommentLeft = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 22px;
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

const Delete = styled(HiOutlineDotsHorizontal)`
  width: 15px;
  height: 15px;
`;

const CommentContent = styled.div`
  font-size: 14px;
  line-height: 22px;
`;
