import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>Error</h1>
      <h3 className="error-message">
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
}

export default Error;
