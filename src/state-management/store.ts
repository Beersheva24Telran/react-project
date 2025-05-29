import { create } from "zustand";

interface UserStore {
  counter: number;
  user: string;
  login: (username: string) => void;
  logout: () => void;
}
const useUserStore = create<UserStore>((set) => ({
  counter: 0,
  user: "",
  login: (username: string) =>
    set((state) => ({ counter: state.counter + 1, user: username })),
  logout: () => set(() => ({ user: "" })),
}));
export default useUserStore;
