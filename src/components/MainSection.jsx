import React, { Children } from "react";

const MainSection = ({ children }) => {
  return (
    <main className="main-content w-full px-[var(--margin-x)] pb-8">
      {children}
    </main>
  );
};

export default MainSection;
