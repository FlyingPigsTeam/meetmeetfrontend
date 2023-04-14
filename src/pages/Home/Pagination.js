import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const goToPreviousPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };

  const goToNextPage = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
  };

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
      <div className="-mt-px flex w-0 flex-1">
        <button
          onClick={goToPreviousPage}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          <ArrowLongLeftIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
          Previous
        </button>
      </div>
      <div className="hidden md:-mt-px md:flex">
        {[...Array(totalPages)].map((_, i) => {
          const pageNumber = i + 1;
          const isActive = currentPage === pageNumber;
          return (
            <button
              key={pageNumber}
              onClick={() => setCurrentPage(pageNumber)}
              className={`inline-flex items-center border-t-2 border-${
                isActive ? 'indigo' : 'transparent'
              } ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'} px-4 pt-4 text-sm font-medium`}
              aria-current={isActive ? 'page' : undefined}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <div className="-mt-px flex w-0 flex-1 justify-end">
        <button
          onClick={goToNextPage}
          className="inline-flex items-center border-t-2 border-transparent pt-4 pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          Next
          <ArrowLongRightIcon className="ml-3 h-5 w-5 text-gray-400" aria-hidden="true" />
        </button>
      </div>
    </nav>
  );
};

export default Pagination;
