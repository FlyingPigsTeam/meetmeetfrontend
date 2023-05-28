import React from "react";
import { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

const InfiniteQuery = () => {
  const GetHistory = async (page) => {
    const response = await fetch(
      `https://api.github.com/search/repositories?q=topic:reactjs&per_page=30&page=${page}`
    );
    return response.json();
  };
  //const { data } = useQuery("repositories", GetHistory);
  //console.log(data);
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery(
    "repositories",
    ({ pageParam = 1 }) => GetHistory(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        const maxPages = lastPage.total_count / 30;
        const nextPage = allPages.length + 1;
        return nextPage <= maxPages ? nextPage : undefined;
      },
    }
  );

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

  console.log(data);
  return (
    <div>
      <div>InfiniteQuery</div>
      {data
        ? data.items.map((item) => (
            <li key={item.id}>
              <p>
                <b>{item.name}</b>
              </p>
              <p>{item.description}</p>
            </li>
          ))
        : ""}
    </div>
  );
};

export default InfiniteQuery;
