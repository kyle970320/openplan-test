import { QueryProvider } from "./query/QueryProvider";
import { Routers } from "./routes/Routers";

export default function App() {
  return (
    <QueryProvider>
      <Routers />
    </QueryProvider>
  );
}
