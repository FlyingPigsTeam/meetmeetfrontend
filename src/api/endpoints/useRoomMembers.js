import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import React from "react";

export const useGetRoomMembers = (roomId, page = 1, entries = 1) => {
  return useQuery(
    ['roomMembers', roomId, page, entries],
    async () => { return axios.get(`/api/my-rooms/${roomId}/requests?show_members=1&page=${page}&entries=${entries}`) },
    {
      keepPreviousData: false,
    }
  );
};

export const useAddRoomMembers = (roomId) => {
  const queryClient = useQueryClient();
  const [selectedNew, setSelectedNew] = React.useState([])

  const addRoomMembers = async (roomId) => {
    console.log("selectd", roomId, selectedNew);
    const promises = selectedNew.map(async (member) => {
      const { data } = await axios.post(`/api/my-rooms/${roomId}/requests?username=${member}`);
      return data;
    });

    await Promise.all(promises);

    const existingQueries = queryClient.getQueryCache().findAll('roomMembers');

    existingQueries.forEach((query) => {
      const [_, queryRoomId, queryPage, queryEntries] = query.queryKey;

      if (queryRoomId === roomId && queryPage === '1') {
        queryClient.removeQueries(query.queryKey);
      }
    });

    queryClient.invalidateQueries(['roomMembers', roomId]);

    return true;
  };

  return [selectedNew,setSelectedNew,useMutation(addRoomMembers)];
};
