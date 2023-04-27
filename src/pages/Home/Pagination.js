import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { useEffect, useState } from 'react';
import { usePaginated } from '@makotot/paginated';

const Pagination = ({current,total ,setPage}) => {

  const [currentP,setCurrentP] = useState(current);
  const { pages, currentPage, hasPrev, hasNext, getFirstBoundary, getLastBoundary, isPrevTruncated, isNextTruncated } = usePaginated({ currentPage: current, totalPage: total, siblingsSize: 2, boundarySize: 2 });
  const goToNextPage = () => {
    setPage(currentPage < total ? currentPage + 1 : total);
    setCurrentP(currentPage < total ? currentPage + 1 : total);
    
  };
  const goToPreviousPage = () => {
    setPage(currentPage > 1 ? currentPage - 1 : 1);
    setCurrentP(currentPage > 1 ? currentPage - 1 : 1);
   
  };
  return (

    <div
      className="flex flex-col justify-between space-y-4 px-4 py-4 sm:flex-row sm:items-center sm:space-y-0 sm:px-5"
    >
      <div className="flex items-center space-x-2 text-xs+">
        {/* <span>Show</span>
        <label className="block">
          <select
            className="form-select rounded-full border border-slate-300 bg-white px-2 py-1 pr-6 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:bg-navy-700 dark:hover:border-navy-400 dark:focus:border-accent"
          >
            <option>10</option>
            <option>30</option>
            <option>50</option>
          </select>
        </label>
        <span>entries</span> */}
      </div>

      <ol className="pagination">
        {hasPrev() && <li className="rounded-l-lg bg-slate-150 dark:bg-navy-500">
          <a
            onClick={goToPreviousPage}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </a>
        </li>}
        {getFirstBoundary().map(boundary => <li className="bg-slate-150 dark:bg-navy-500">
      <a
        onClick={() =>{ setPage(boundary);
          setCurrentP(boundary);
        }}
        className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
      >{boundary}</a
      >
    </li>)}
        {isPrevTruncated && <SimpleButton >...</SimpleButton>}
        {pages.map(page => {
          return page === currentPage ? (
            <li className="bg-slate-150 dark:bg-navy-500">
      <a
        onClick={() =>{ setPage(page);
          setCurrentP(page);
        }}
        className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg bg-primary px-3 leading-tight text-white transition-colors hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
      >{page}</a
      >
    </li>
          ) : (
            <li className="bg-slate-150 dark:bg-navy-500">
      <a
        onClick={() =>{ setPage(page);
          setCurrentP(page);
        }}
        className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
      >{page}</a
      >
    </li>
          );
        })}

        {isNextTruncated && <SimpleButton >...</SimpleButton>}
        {getLastBoundary().map(boundary => <li className="bg-slate-150 dark:bg-navy-500">
      <a
        onClick={() =>{ setPage(boundary);
          setCurrentP(boundary);
        }}
        className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
      >{boundary}</a
      >
    </li>)}




        {hasNext() && <li className="rounded-r-lg bg-slate-150 dark:bg-navy-500">
          <a
            onClick={goToNextPage}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-500 transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:text-navy-200 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </li>}
      </ol>

      <div className="text-xs+"> </div>
    {/*        <div className="text-xs+">1 - 10 of 10 entries</div>*/}
    </div>

  );
}


const SimpleButton = ({ children }) => {
  return (
    <li className="bg-slate-150 dark:bg-navy-500">
      <a
      
        className="flex h-8 min-w-[2rem] items-center justify-center rounded-lg px-3 leading-tight transition-colors hover:bg-slate-300 focus:bg-slate-300 active:bg-slate-300/80 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
      >{children}</a
      >
    </li>
  );
}

export default Pagination;