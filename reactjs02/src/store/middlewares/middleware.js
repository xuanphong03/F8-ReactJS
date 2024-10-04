export const middleware = (store) => {
  const { dispatch, getState } = store;
  return (action) => {
    if (typeof action === "function") {
      return action(dispatch, getState);
    }
    dispatch(action);
  };
};
