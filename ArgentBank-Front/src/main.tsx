import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx';
import Connection from './pages/connection/connection.tsx';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import NavBar from './components/navBar/NavBar.tsx';
import Footer from './components/footer/Footer.tsx';
import "./index.css"

const HeaderAndFooter = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HeaderAndFooter;


const router = createBrowserRouter([
  {
    element: <HeaderAndFooter />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/connection",
        element: <Connection />
      },
      {
        path: "/user",
        element: <div>User</div>   
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
