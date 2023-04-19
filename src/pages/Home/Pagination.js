import { ArrowLongLeftIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import { useEffect,useState } from 'react';
const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  const [pageNumbers,setgetPageNumbers]= useState([]);
  const goToPreviousPage = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    setgetPageNumbers(getPageNumbers(currentPage -1));
  };


  const goToNextPage = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
    setgetPageNumbers(getPageNumbers(currentPage+1));
  };

  const getPageNumbers = (current_page) => {
    let b=0;
    let page_numbers=[]
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        page_numbers.push(i);
      }
    } 
    else{
      if( current_page<5){
        for (let i = 1; i <= 5; i++) {
            page_numbers.push(i);
        }
        // page_numbers.push('...');
        for (let i = totalPages - 2; i <= totalPages; i++) {
          page_numbers.push(i);
        }
      }
      else if(current_page >= 5 && current_page < totalPages - 3) {
        page_numbers.push(1);
        // page_numbers.push('...');
        for (let i = current_page-1; i <=current_page +1 ; i++) {
          page_numbers.push(i);
        }
        // page_numbers.push('...');
        
        for (let i = totalPages - 2; i <= totalPages; i++) {
          page_numbers.push(i);
        }
        
      }
    else {
      page_numbers.push(1);
        // page_numbers.push('...');
        for (let i = current_page-1; i <=totalPages; i++) {
          page_numbers.push(i);
        }

    }
    }
    
    // if (totalPages <= 10) {
    //   for (let i = 1; i <= totalPages; i++) {
    //     page_numbers.push(i);
    //   }
    // } 
    // else {  
    //   if (currentPage < 5) {
    //     console.log("333333333333333333333333333333333333333333333");
    //     console.log(pageNumbers);
    //     page_numbers.splice(1,1);
    //     console.log(page_numbers);
    //     b=0;
    //     for (let i = 1; i <= 5; i++) {
    //       page_numbers.push(i);
    //     }
    //     page_numbers.push('...');
    //     for (let i = totalPages - 2; i <= totalPages; i++) {
    //       page_numbers.push(i);
    //     }
    //   } 
    //   else if (currentPage > totalPages - 4) {
    //     for (let i = 1; i <= 3; i++) {
    //       page_numbers.push(i);
    //     }
    //     page_numbers.push('...');
    //     for (let i = totalPages - 4; i <= totalPages; i++) {
    //       page_numbers.push(i);
    //     }
    //   }
    //   else if (currentPage >= 5) {
    //     page_numbers.push(1);
    //     if(b===0)
    //     page_numbers.push("...");
    //             for (let i = currentPage; i <= currentPage+2; i++) {
    //       page_numbers.push(i);
    //     }
    //     page_numbers.push('...');
    //     for (let i = totalPages - 2; i <= totalPages; i++) {
    //       page_numbers.push(i);
    //     }
    //     b=1;
      // }
      // else {
      //   pageNumbers.push(1);
      //   if(pageNumbers[1]==="..."){
      //     pageNumbers.splice(1,1);
      //     console.log("less than 5");
      //   }
      //   else
      //     pageNumbers.push('...');
      //   pageNumbers.push(currentPage - 1);
      //   pageNumbers.push(currentPage);
      //   pageNumbers.push(currentPage + 1);
      //   pageNumbers.push('...');
      //   pageNumbers.push(totalPages);
      // }
      
    // }
  
    return page_numbers;
  };
  useEffect(() => {
    setgetPageNumbers(getPageNumbers(currentPage));
  }, [totalPages]);

  
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
    {pageNumbers.map((pageNumber) => {
      const isActive = currentPage === pageNumber;
      const isEllipsis = pageNumber === '...';
      return (
        <button
          key={pageNumber}
          onClick={() =>{ setCurrentPage(pageNumber);
          setgetPageNumbers(getPageNumbers(pageNumber));
          }
        
        }
          className={`inline-flex items-center border-t-2 border-${isActive ? 'indigo' : 'transparent'
            } ${isActive ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'} px-4 pt-4 text-sm font-medium ${isEllipsis ? '' : 'rounded-full'} ${isActive ? 'bg-indigo-600 text-white' : ''}`}
          aria-current={isActive ? 'page' : undefined}
          disabled={isEllipsis}
        >
          {isEllipsis ? '...' : <span className="w-5 h-5 flex items-center justify-center">{pageNumber}</span>}
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
      }

export default Pagination;