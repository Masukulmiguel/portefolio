"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface RecruiterContextType {
  isRecruiterMode: boolean;
  toggleRecruiterMode: () => void;
}

const RecruiterContext = createContext<RecruiterContextType>({
  isRecruiterMode: false,
  toggleRecruiterMode: () => {},
});

export function useRecruiterMode() {
  return useContext(RecruiterContext);
}

export function RecruiterProvider({ children }: { children: ReactNode }) {
  const [isRecruiterMode, setIsRecruiterMode] = useState(false);

  const toggleRecruiterMode = () => setIsRecruiterMode((prev) => !prev);

  return (
    <RecruiterContext.Provider value={{ isRecruiterMode, toggleRecruiterMode }}>
      <div
        data-recruiter={isRecruiterMode}
        className={isRecruiterMode ? "recruiter-mode" : ""}
      >
        {children}
      </div>
    </RecruiterContext.Provider>
  );
}
