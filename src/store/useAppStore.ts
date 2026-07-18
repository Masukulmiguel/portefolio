import { create } from "zustand";

interface AppState {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isMenuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  theme: "dark" | "light";
  setTheme: (theme: "dark" | "light") => void;
}

export const useAppStore = create<AppState>((set) => ({
  activeSection: "hero",
  setActiveSection: (section) => set({ activeSection: section }),
  isMenuOpen: false,
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  theme: "dark",
  setTheme: (theme) => set({ theme }),
}));
