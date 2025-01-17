import { create } from "zustand";

// Define the user type
export type User = {
  id: string;
  role: string;
  name: string;
  email: string;
};

// Define the Zustand store
type UserStore = {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: string, updatedUser: Partial<User>) => void;
  deleteUser: (id: string) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [
    { id: "m5gr84i9", role: "Student", name: "Allwin", email: "ken99@yahoo.com" },
    { id: "3u1reuv4", role: "Student", name: "Pratap", email: "Abe45@gmail.com" },
    { id: "derv1ws0", role: "Instructor", name: "Mike", email: "Monserrat44@gmail.com" },
    { id: "5kma53ae", role: "Instructor", name: "Jason", email: "Silas22@gmail.com" },
    { id: "bhqecj4p", role: "Student", name: "Jim", email: "carmella@hotmail.com" },
  ],
  addUser: (user) =>
    set((state) => ({
      users: [user, ...state.users], // Add new user at the top
    })),
  updateUser: (id, updatedUser) =>
    set((state) => {
      const updatedUsers = state.users.map((user) =>
        user.id === id ? { ...user, ...updatedUser } : user
      );
      const updatedUserIndex = updatedUsers.findIndex((user) => user.id === id);

      // Move the updated user to the top
      if (updatedUserIndex > -1) {
        const [updatedEntry] = updatedUsers.splice(updatedUserIndex, 1);
        updatedUsers.unshift(updatedEntry);
      }

      return { users: updatedUsers };
    }),
  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
    })),
}));
