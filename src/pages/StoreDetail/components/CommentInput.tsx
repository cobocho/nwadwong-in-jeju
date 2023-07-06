import styled from 'styled-components';
import { BiSolidUser } from 'react-icons/bi';
import { useRef } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import useAxios from '../../../hooks/useAxios';
import { blogInputState, commentDataState, refState } from '../../../recoil/commentState';
import { useParams } from 'react-router-dom';

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

  const token = localStorage.getItem('token');

  const inputRef = useRef<HTMLTextAreaElement | null>(null);
  const setInputState = useSetRecoilState(refState);
  const [content, setContent] = useRecoilState(blogInputState);
  setInputState(inputRef.current);
  const setCommentData = useSetRecoilState(commentDataState);

  const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const clickHandler = () => {
    fetchData({
      url: '/api/comment',
      method: 'POST',
      headers: {
        authorization: token,
        'Content-Type': `application/json`,
      },
      data: { cupStoreId: cupStoreId, content: content },
    }).then((el: newCommenttype) => {
      setContent('');
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
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
`;

const UserAvatar = styled(BiSolidUser)`
  width: 25px;
  height: 25px;
  padding: 3px;
  border: 1px solid gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CommentInputPlace = styled.textarea`
  width: 75%;
`;
const SubmitButton = styled.button`
  border: none;
  background-color: transparent;
  &:hover {
    cursor: pointer;
  }
`;
