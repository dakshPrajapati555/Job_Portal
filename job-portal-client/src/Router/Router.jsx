import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import About from "../Pages/About";
import CreateJob from "../Pages/CreateJob";
import MyJobs from "../Pages/MyJobs";
import SalaryPage from "../Pages/SalaryPage";
import UpdateJob from "../Pages/UpdateJob";
import Home2 from "../Pages/Home2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {path: "/",element:<Home2/>},
        { path: "/start-a-search", element: <Home /> },
        { path: "/about", element: <About/> },
        { path: "/post-job",element:<CreateJob/>},
        { path: "/my-job",element:<MyJobs/>},
        { path: "/salary",element:<SalaryPage/>},
        { path: "/edit-job/:id",element:<UpdateJob/>,loader:({params} )=> fetch(`http://localhost:5000/all-jobs/${params.id}`)},
    ],
  },
]);

export default router;
