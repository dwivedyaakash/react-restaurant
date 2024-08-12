import useInternetStatus from "../utils/useInternetStatus";

function About() {
  const onlineStatus = useInternetStatus();

  if (onlineStatus === false)
    return <div className="offline-msg">You are offline!</div>;

  return <div className="about-container">About Me</div>;
}

export default About;
