import React, { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useInfiniteQuery, useQuery } from "react-query";

const InfiniteQuery = () => {
  const fetchRepositories = async (page) => {
    const response = await fetch(
      `http://166.0.162.72/history/api/history/4?page=${page}`
    );
    return response.json();
  };
  const [counter, setcounter] = useState(2);
  const { data, fetchNextPage } = useInfiniteQuery(
    "repositories",
    ({ pageParam = 2 }) => fetchRepositories(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        console.log("LastPages:", lastPage);
        console.log("AllPages:", allPages);
        const maxPages = 2;
        setcounter((e) => e - 1);
        return counter > 0 ? counter : undefined;
      },
    }
  );
  // const ininitequery = useInfiniteQuery(
  //   "repositories",
  //   ({ pageParam = 1 }) => fetchRepositories(pageParam),
  //   {
  //     getNextPageParam: (lastPage, allPages) => {
  //       console.log("LastPages:", lastPage);
  //       console.log("AllPages:", allPages);
  //       const maxPages = 2;
  //       const nextPage = allPages.length + 1;
  //       return nextPage <= maxPages ? nextPage : undefined;
  //     },
  //   }
  // );
  // console.log(ininitequery)
  //console.log(data.pages.reverse());

  useEffect(() => {
    let fetching = false;
    const onScroll = async (event) => {
      const { scrollHeight, scrollTop, clientHeight } =
        event.target.scrollingElement;

      if (!fetching && scrollTop <= clientHeight / 2) {
        fetching = true;
        if (counter > 0) await fetchNextPage();
        fetching = false;
      }
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  // console.log(data.pages[0].items);
  const fake = [
    1, 2, 3, 4, 5, 4, 3, 3, 4, 4, 5, 4, 3, 3, 32, 32, 4, 5, 43, 3, 3, 2, 4, 5,
    5, 4, 3, 2,
  ];
  const messageEndRef = useRef(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ block: "end" });
  }, []);
  return (
    <div>
      <h1>Infinite Scroll</h1>
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
      <ul>
        {fake.map((e, index) => (
          <li key={index}>
            <p>{e}</p>
            <br />
            <br />
            <br />
          </li>
        ))}
      </ul>
      <ul></ul>
      <div ref={messageEndRef} />
    </div>
  );
};

export default InfiniteQuery;
