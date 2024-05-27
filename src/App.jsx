import { RouterProvider } from "react-router-dom";
import rootRoutes from "./routes";

function App() {
  return <RouterProvider router={rootRoutes} />;
}

export default App;
