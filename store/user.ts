import { atom } from "jotai";

export const userAtom = atom({
  id: "1",
  username: "admin",
  email: "",
  nickname: "何老板",
  avatarUrl: "https://picsum.photos/id/425/200/200",
});
