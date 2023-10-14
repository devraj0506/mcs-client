import {
    createBrowserRouter,
  
  } from "react-router-dom";
import App from "../App";
import HomePage from "../Home/HomePage";
import SerchedUserPage from "../DetailsPage/SerchedUserPage";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element:<App/>,

children:[
  {path: "/", element:<HomePage/>,
},
  {path: "/:id", element:<SerchedUserPage/>,
    loader:({params})=> fetch(`http://localhost:5000/${params.id}`)
    },
 
]    },
  ]);

  export default router;