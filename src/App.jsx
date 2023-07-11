import "./App.css";
import RouteLayout from "./Route";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Movies from "./components/Movies/Movies";
import DataContextProvider from "./context/context";
import ErrorPage from "./components/ErrorPage";
import MovieInfo from "./components/MovieInfo";
import Home from "./components/Home";
import MyList from "./components/MyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "anime", element: <Movies /> },
      { path: "movie-details/:movieId", element: <MovieInfo /> },
      { path: "my-list", element: <MyList /> },
    ],
  },
]);

function App() {
  return (
    <DataContextProvider>
      <RouterProvider router={router} />
    </DataContextProvider>
  );
}

export default App;
