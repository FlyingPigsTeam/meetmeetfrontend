import React from "react";

const PageWrapper = ({ children }) => {
  return (
    <div id="root" class="min-h-100vh flex grow bg-slate-50 dark:bg-navy-900">
      {children}
    </div>
  );
};

export default PageWrapper;
