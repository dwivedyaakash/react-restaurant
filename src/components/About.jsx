import useInternetStatus from "../utils/useInternetStatus";

function About() {
  const onlineStatus = useInternetStatus();

  if (onlineStatus === false)
    return (
      <div className="offline-msg flex items-center justify-center text-gray-300 text-3xl h-[80vh]">
        You are offline!
      </div>
    );

  return (
    <div className="about-container offline-msg my-8 text-center text-gray-300 text-3xl">
      About Me
    </div>
  );
}

export default About;
