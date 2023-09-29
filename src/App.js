import Hero from "./pages/app/hero/Hero";
import Nav from "./components/nav/Nav";
import Courses from "./pages/app/courses/Courses";
import Details from "../src/pages/app/details/Details";
import Learn from "../src/pages/app/learn/Learn"

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <Hero /> },
        { path: "/courses",
          children: [
            {index: true , element: <Courses/>},
            {
              path: ':courseId',
              element: <Details/>
            }
          ]
         },
         {
            path:'/learn/:courseId',
            element:<Learn/>,
         },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;
