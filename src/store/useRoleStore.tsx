// zustand store (useRoleStore.ts)
import { create } from "zustand";

interface RoleStore {
  role: "admin" | "instructor" | "student";
  setRole: (role: "admin" | "instructor" | "student") => void;
}

export const useRoleStore = create<RoleStore>((set) => ({
  role: "student",
  setRole: (role) => set({ role }),
}));
