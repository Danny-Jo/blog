import React from 'react';

type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <div className="px-4">
      <main className="max-w-[1200px] w-full min-h-screen mx-auto">
        {children}
      </main>
    </div>
  );
};

export default MainContainer;
