import { atom } from "recoil";
import { detailDataType } from "../pages/StoreDetail/StoreDetail";

export const detailState = atom<detailDataType | null>({
  key: "detailState",
  default: null,
});
