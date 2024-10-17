import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import Connection from './pages/connection/Connection.tsx';
import User from './pages/user/user.tsx';
import Transaction from './pages/transaction/Transaction.tsx';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import NavBar from './components/navBar/NavBar.tsx';
import Footer from './components/footer/Footer.tsx';
import "./index.css";
import store from "./redux/store.ts";
import { Provider } from 'react-redux';

const HeaderAndFooter = () => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

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
        element: <User />
      },
      {
        path: "/transaction",
        element: <Transaction />
      }
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Enveloppez RouterProvider avec Provider */}
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
);
