import create from "zustand";

const useUserStore = create((set) => ({
  info: {
    id: "1",
    username: "admin",
    email: "",
    nickname: "",
    avatarUrl: "https://picsum.photos/id/425/200/200",
  },
}));

export default useUserStore;
