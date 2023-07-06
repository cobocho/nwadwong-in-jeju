import { atom } from "recoil";
import { commentDataType } from "../pages/StoreDetail/StoreDetail";

export const refState = atom<HTMLTextAreaElement | null>({
  key: "refState",
  default: null,
});

export const renderingState = atom({
  key: "renderingState",
  default: false,
});

export const blogInputState = atom({
  key: "blogInputState",
  default: "",
});

export const commentDataState = atom<commentDataType[]>({
  key: "commentDataState",
  default: [],
});
