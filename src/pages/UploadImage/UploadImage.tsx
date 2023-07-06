import { ChangeEvent, useState } from "react";
import styled from "styled-components";

interface ImageInputProps {
  src?: string;
  imagePreview?: string | null;
}

export default function UploadImage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const onUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImagePreview(reader.result ? String(reader.result) : "");
        resolve();
      };
    });
  };

  return (
    <UploadContainer>
      <form>
        <UploadBtn imagePreview={imagePreview ?? `#d9d9d9`}>
          <UploadLabel htmlFor="uploadButton">
            <ImagePreview
              src="/images/uploadImage/default.png"
              imagePreview={imagePreview}
            ></ImagePreview>
            <AddIcon src="/images/uploadImage/addIcon.png"></AddIcon>
          </UploadLabel>
          <ImageInput
            type="file"
            accept="image/*"
            id="uploadButton"
            onChange={(e: ChangeEvent<HTMLInputElement>) => onUpload(e)}
          />
        </UploadBtn>
      </form>
      <SubmitBtn>제출하기</SubmitBtn>
    </UploadContainer>
  );
}

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const UploadBtn = styled.div<ImageInputProps>`
  width: 334px;
  height: 486px;
  margin: 0 auto 38px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.imagePreview});
  background-color: ${(props) => props.imagePreview};

  &:hover {
    cursor: pointer;
  }
`;

const UploadLabel = styled.label`
  width: 100%;
  height: 100%;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const SubmitBtn = styled.button`
  width: 166px;
  height: 50px;
  border: none;
  border-radius: 8px;
  background-color: #b4f3a8;

  &:hover {
    cursor: pointer;
  }
`;

const ImagePreview = styled.img<ImageInputProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) =>
    !props.imagePreview || props.imagePreview === "#d9d9d9" ? "block" : "none"};
`;

const AddIcon = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
`;

const ImageInput = styled.input<ImageInputProps>`
  width: 334px;
  height: 486px;
  display: none;
  position: absolute;
  border: 1px solid red;
  left: 50%;
  transform: translate(-50%, 0%);
`;
