import React, { Children } from "react";
import classNames from "../utils/classNames";

const MainSection = ({ children ,classes}) => {
  return (
    
    <main className={classNames(classes,"main-content w-full px-[var(--margin-x)] pb-8")}>
      <div className="p-6">
      {children}
      </div>
    </main>
  );
};

export default MainSection;
