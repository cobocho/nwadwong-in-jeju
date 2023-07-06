import { atom } from "recoil";
import { UserPointDataType } from "../pages/UploadImage/UploadImage";

export const userPointState = atom<UserPointDataType>({
  key: "userPointState",
  default: {
    cupStoreName: "",
    memberNickname: "",
    memberAccumulatedPoint: 0,
    memberPoint: 0,
    gainPoint: 0,
  },
});
