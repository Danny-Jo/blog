import React from "react";

type Props = {
  children: React.ReactNode;
};

const MainContainer = ({ children }: Props) => {
  return (
    <div className="px-6">
      <main className="max-w-[1440px] w-full min-h-screen mx-auto">
        {children}
      </main>
    </div>
  );
};

export default MainContainer;
