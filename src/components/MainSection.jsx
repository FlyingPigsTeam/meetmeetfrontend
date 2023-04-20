import React, { Children } from "react";

const MainSection = ({ children }) => {
  return (
    <main class="main-content w-full px-[var(--margin-x)] pb-8">
      {children}
    </main>
  );
};

export default MainSection;
