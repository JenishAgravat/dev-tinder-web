import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import UserCard from "./userCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed = async () => {
    if (feed) return;
    try {
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      dispatch(addFeed(res.data));
    } catch (err) {}
  };
  useEffect(() => {
    getFeed();
  }, []);

  if(!feed) return <h1>LOADING.....</h1>

  return (
    <>
      <div className="">
        {feed && <UserCard feed={feed} />}
      </div>
    </>
  );
};

export default Feed;
