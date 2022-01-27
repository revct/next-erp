import create from "zustand";
import { supabase } from "~/utils/supabase-client";

const useUserStore = create((set) => ({
  info: {
    ...supabase.auth.user(),
    avatarUrl: "https://picsum.photos/id/8/200/200",
  },
  signOut: () => {},
}));

export default useUserStore;
