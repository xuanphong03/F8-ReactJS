import { useEffect } from "react";
import { useDispatch, useSelector } from "../../hooks";
import { getProfile } from "../../store/middlewares/postMiddleware";
function Profile() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  useEffect(() => {
    dispatch(getProfile());
  }, []);
  return (
    <div>
      <h1>Email: {profile.email}</h1>
    </div>
  );
}

export default Profile;
