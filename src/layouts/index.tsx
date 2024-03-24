import React, { ReactNode } from 'react';
import { useAppSelector } from '@/redux/hooks';

interface RootLayoutProps {
    children: ReactNode;
}

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  const isDarkMode = useAppSelector((state) => state.theme.isDarkMode);

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      {children}
    </div>
  );
};

export default RootLayout;
