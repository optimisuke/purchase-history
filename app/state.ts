// state.ts

import { atom } from "recoil";
import { User } from "./types/types";

export const userState = atom<User | null>({
  key: "userState",
  default: { id: 1, name: "Lucas Bill" },
});
