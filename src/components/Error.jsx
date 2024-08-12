import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div className="error-container flex items-center justify-center h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-gray-300 text-5xl mb-2">Error</h1>
        <h3 className="error-message text-gray-300 text-3xl">
          {err.status}: {err.statusText}
        </h3>
      </div>
    </div>
  );
}

export default Error;
