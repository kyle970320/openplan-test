import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";
import { QueryProvider } from "./query/QueryProvider";

export default function App() {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
}
