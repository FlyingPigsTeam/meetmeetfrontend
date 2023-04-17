import React from "react";

const Skeleton = () => {
  return (
    <div>
      <div class="flex animate-pulse flex-wrap -space-x-2">
        <div class="avatar h-8 w-8">
          <div class="is-initial rounded-full bg-slate-200 text-xs+ uppercase text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i class="fa fa-user"></i>
          </div>
        </div>
        <div class="avatar h-8 w-8">
          <div class="is-initial rounded-full bg-slate-200 text-xs+ text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i class="fa fa-user"></i>
          </div>
        </div>
        <div class="avatar h-8 w-8">
          <div class="is-initial rounded-full bg-slate-200 text-xs+ text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i class="fa fa-user"></i>
          </div>
        </div>
        <div class="avatar h-8 w-8">
          <div class="is-initial rounded-full bg-slate-200 text-xs+ text-white ring ring-white dark:bg-navy-500 dark:ring-navy-700">
            <i class="fa fa-user"></i>
          </div>
        </div>


      </div>
    </div>
  );
};

export default Skeleton;
