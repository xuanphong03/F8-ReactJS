export const increment = (payload = {}) => ({
  type: "counter/increment",
  payload,
});

export const decrement = (payload = {}) => ({
  type: "counter/decrement",
  payload,
});
