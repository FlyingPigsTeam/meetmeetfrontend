import React, { useEffect, useRef } from "react";
import { useInfiniteQuery, useQuery } from "react-query";
import { useIntersection } from "@mantine/hooks";
import axios from "axios";
import classNames from "../../../utils/classNames";

const PAGE_SIZE = 10;

const fetchChatCount = async () => {
  const response = await axios.get(
    "http://meet-meet.ir/history/api/history/count/1"
  );
  return response.data;
};

const fetchChatHistory = async ({ pageParam = 1 }) => {
  const response = await axios.get(
    `http://meet-meet.ir/history/api/history/1?page=${pageParam}`
  );
  return response.data;
};

const Chatroom = () => {
  const {
    data: countData,
    isLoading: countLoading,
    isError: countError,
  } = useQuery("chatCount", fetchChatCount);

  const totalPage = Math.ceil(countData?.count / PAGE_SIZE);

  const {
    data: historyData,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading: historyLoading,
    isError: historyError,
  } = useInfiniteQuery("chatHistory", fetchChatHistory, {
    enabled: !!countData,
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1 <= totalPage ? pages.length + 1 : undefined;
    },
  });

  // const lastPostRef = React.useRef(null);
  // const { ref, entry } = useIntersection({
  //   root: lastPostRef.current,
  //   threshold: 1,
  // });

  const firstPostRef = React.useRef(null);
  const { ref, entry } = useIntersection({
    root: firstPostRef.current,
    threshold: 1,
  });

  React.useEffect(() => {
    if (entry?.isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  }, [entry, fetchNextPage, hasNextPage]);

  const chatMessages = historyData?.pages.flatMap((page) => page);

  const messageEndRef = useRef(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ block: "end" });
  }, []);
  return (
    <div ref={messageEndRef}>
      {countLoading || historyLoading ? (
        <div>Loading...</div>
      ) : countError || historyError ? (
        <div>Error occurred while fetching data.</div>
      ) : (
        <>
          <div ref={ref}></div>
          {console.log(chatMessages)}
          {chatMessages &&
            chatMessages.reverse().map((message, i) => {
              return (
                <>
                  <div className="h-40 font-extrabold" key={message.message}>
                    {i + " - " + message.message}
                  </div>
                  <br />
                </>
              );
            })}
          {/* <button
            onClick={fetchNextPage}
            className={classNames(
              "btn min-w-[7rem] rounded-full font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90",
              (!hasNextPage || isFetching) && "bg-primary",
              !(!hasNextPage || isFetching) && "bg-error"
            )}
            disabled={!hasNextPage || isFetching}
          >
            {isFetching
              ? "Loading more..." + totalPage + " " + countData.count
              : "Load More " + totalPage + " " + countData.count}
          </button> */}
        </>
      )}
    </div>
  );
};

export default Chatroom;
