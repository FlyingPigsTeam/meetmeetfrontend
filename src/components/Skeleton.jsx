import React from "react";

const Skeleton = () => {
  return (
    <div>
      <div className="flex animate-pulse flex-wrap -space-x-2">
        <div className="avatar h-8 w-8">
          <div className="is-initial rounded-full bg-slate-200 text-xs+ uppercase text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i className="fa fa-user"></i>
          </div>
        </div>
        <div className="avatar h-8 w-8">
          <div className="is-initial rounded-full bg-slate-200 text-xs+ text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i className="fa fa-user"></i>
          </div>
        </div>
        <div className="avatar h-8 w-8">
          <div className="is-initial rounded-full bg-slate-200 text-xs+ text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i className="fa fa-user"></i>
          </div>
        </div>
        <div className="avatar h-8 w-8">
          <div className="is-initial rounded-full bg-slate-200 text-xs+ text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i className="fa fa-user"></i>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Skeleton;
