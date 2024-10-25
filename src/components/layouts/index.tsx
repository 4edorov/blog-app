import { ReactNode } from "react";

interface BaseProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: BaseProps) => {
  return <div className="main-layout">{children}</div>;
};

export const MainSection = ({ children }: BaseProps) => {
  return <div className="main-section">{children}</div>;
};
