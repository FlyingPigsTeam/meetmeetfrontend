import React, { useState } from "react";
import { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

const InfiniteQuery = () => {
  const [AllPages, setAllPages] = useState([]);
  const fetchRepositories = async (page) => {
    const response = await fetch(
      `http://166.0.162.72/history/api/history/4?page=${page}`
    );
    return response.json();
  };
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "repositories",
    ({ pageParam = 1 }) => fetchRepositories(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log("LastPages:", lastPage);
        console.log("AllPages:", allPages);
        const maxPages = 2;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );
  console.log(data.pages[1]);

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
        fetching = true;
        if (hasNextPage) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  // console.log(data.pages[0].items);
  return (
    <div>
      <h1>Infinite Scroll</h1>
      <ul>
        {data
          ? data.pages.map((e) =>
              e.map((repo, index) => (
                <li key={repo.index}>
                  <p>
                    <p>{repo.username}</p>
                    <p>{repo.user_id}</p>
                  </p>
                  <p>{repo.message}</p>
                  <br />
                </li>
              ))
            )
          : ""}
      </ul>
    </div>
  );
};

export default InfiniteQuery;
