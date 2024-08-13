import { useContext, useEffect, useState } from "react";
import useInternetStatus from "../utils/useInternetStatus";
import Shimmer from "./Shimmer";
import UserContext from "./UserContext";

function About() {
  const onlineStatus = useInternetStatus();
  const [user, setUser] = useState();
  const { setUsername } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://api.github.com/users/dwivedyaakash");
    const json = await data.json();
    setUser(json);
    setUsername(json.name);
  };

  if (onlineStatus === false)
    return (
      <div className="offline-msg flex items-center justify-center text-gray-300 text-3xl h-[80vh]">
        You are offline!
      </div>
    );

  return user?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="w-6/12 m-auto text-center">
      <div className="about-container offline-msg my-8 text-center text-gray-300 text-3xl">
        About Me
      </div>
      <div className="m-4 p-4 bg-slate-900 rounded-lg">
        <div className="text-lg mb-2">{user?.name}</div>
        <div>{user?.bio}</div>
      </div>
    </div>
  );
}

export default About;
