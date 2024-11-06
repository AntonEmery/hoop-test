import React, { ReactNode } from "react";

interface MainContainerProps {
  children: ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-[var(--main-app-bg)] text-white">
      {children}
    </div>
  );
};

export default MainContainer;