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
import { Provider } from 'react-redux';
import { persistor, store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react';
import PrivateRoute from './components/privateRoute/privateRoute.tsx';

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
        element: <PrivateRoute element={<User />} /> 
      },
    ]
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />         
      </PersistGate>
    </Provider>
  </StrictMode>,
);
