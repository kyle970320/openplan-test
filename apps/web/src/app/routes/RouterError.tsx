import { useRouteError, isRouteErrorResponse } from "react-router-dom";

import Error from "@/app/Error";
import NotFound from "@/app/NotFound";

export default function RouteError() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 404) {
    return <NotFound />;
  }

  return <Error error={error as Error} />;
}
