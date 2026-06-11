import React from 'react';
import ReactDOM from 'react-dom/client';
import './../index.scss';
import HeaderComponent from './components/Header';
import MainContainer from './components/Main';
import FooterComponent from './components/Footer';
import RestaurentData from './utils/restaurents';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import ErrorPage from './components/Error';
import RestaurantDetails from './components/RestaurantDetails';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router';

const AppLayout = () => {
    return (
        <div id="app-layout">
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element: <MainContainer/>
            },
            {
                path: "/about",
                element: <AboutUs/>
            },
            {
                path: "/contact",
                element: <ContactUs/>
            },
            {
                path: "/restaurant/:restaurantId",
                element: <RestaurantDetails/>
            }
        ],
        errorElement: <ErrorPage/>
    }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
