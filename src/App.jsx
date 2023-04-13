import "./App.css";
import { InfinitePeople } from "./people/InfinitePeople";
import { QueryClient, QueryClientProvider } from "react-query";
import { InfiniteSpecies } from "./species/InfiniteSpecies";
import { ReactQueryDevtools } from "react-query/devtools";

let queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <h1>Infinite SWAPI</h1>
        <InfinitePeople />
        <InfiniteSpecies />
        <ReactQueryDevtools />
      </div>
    </QueryClientProvider>
  );
}

export default App;
