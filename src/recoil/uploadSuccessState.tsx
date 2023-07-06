import { atom } from "recoil";

export const uploadSuccessState = atom<boolean>({
  key: "uploadSuccessState",
  default: false,
});
