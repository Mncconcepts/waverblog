import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';


// bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


// fonts and icons
import '././assets/css/animate.css';
import '././assets/css/style.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home/Home.jsx";
import Blog from './blog/Blog.jsx';
import SingleBlog from './blog/SingleBlog.jsx';
import About from './about/About.jsx';
import Contact from './contactPage/Contact.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/blog",
        element: <Blog />
      },

      {
        path: "/blog/:id",
        element: <SingleBlog />
      },
     
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
    ],
  },

  {
    path: "login",
    element: <Login />
  },

  {
    path: "sign-up",
    element: <Signup/>
  }
 
]);

createRoot(document.getElementById('root')).render(
  // <AuthProvider>
  <RouterProvider router={router} />
  // {/* </AuthProvider> */}
);
