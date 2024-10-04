export const getPosts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const posts = await response.json();
      dispatch({
        type: "post/update",
        payload: posts,
      });
    } catch (error) {
      throw new Error("Failed to fail");
    }
  };
};

export const getProfile = () => {
  return async (dispatch) => {
    try {
      const { access_token } = JSON.parse(localStorage.getItem("jwt"));
      const response = await fetch(
        "https://api.escuelajs.co/api/v1/auth/profile",
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      const profile = await response.json();
      console.log(profile);

      dispatch({
        type: "profile/update",
        payload: profile,
      });
    } catch (error) {
      throw new Error("Failed to fail");
    }
  };
};
