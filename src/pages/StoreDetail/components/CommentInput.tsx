import styled from "styled-components";
import { BiSolidUser } from "react-icons/bi";
import { useRef } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import useAxios from "../../../hooks/useAxios";
import { blogInputState, commentDataState } from "../../../recoil/commentState";
import { useParams } from "react-router-dom";

interface newCommenttype {
  cupStoreName: string;
  content: string;
  createTime: string;
  commentNickname: string;
}

export default function CommentInput() {
  const [, , , fetchData] = useAxios();
  const params = useParams();
  const cupStoreId = params.id;

  const token = localStorage.getItem("token");

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const [content, setContent] = useRecoilState(blogInputState);
  const setCommentData = useSetRecoilState(commentDataState);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const clickHandler = () => {
    fetchData({
      url: "/api/comment",
      method: "POST",
      headers: {
        authorization: token,
        "Content-Type": `application/json`,
      },
      data: { cupStoreId: cupStoreId, content: content },
    }).then((el: newCommenttype) => {
      setContent("");
      if (el) {
        setCommentData((prevData) => [
          ...prevData,
          {
            content: el.content,
            createdAt: el.createTime,
            commentNickname: el.commentNickname,
          },
        ]);
      }
    });
  };

  return (
    <CommentInputContainer>
      <UserAvatar />
      <CommentInputPlace
        placeholder="댓글을 입력해 주세요."
        onChange={changeHandler}
        ref={inputRef}
        value={content}
      ></CommentInputPlace>
      <SubmitButton onClick={clickHandler}>등록</SubmitButton>
    </CommentInputContainer>
  );
}
const CommentInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 1px solid gray;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;

const UserAvatar = styled(BiSolidUser)`
  width: 25px;
  height: 25px;
  padding: 3px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.3);
`;

const CommentInputPlace = styled.textarea`
  width: 75%;
  padding-left: 10px;
  padding-top: 10px;
  border: none;
  outline: none;
  resize: none;
  font-family: inherit;
  background-color: transparent;
  color: #bbbbbb;
`;

const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
