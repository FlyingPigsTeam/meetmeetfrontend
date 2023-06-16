export const OpeningSidebar = () => async (dispatch, getState) => {
  dispatch({
    type: "OpenSidebar",
    payload: true,
  });
};

export const ClosingSidebar = () => async (dispatch, getState) => {
  dispatch({
    type: "CloseSidebar",
    payload: false,
  });
};
