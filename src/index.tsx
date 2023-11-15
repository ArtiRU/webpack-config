import './assets/styles/global.scss'
import {createRoot} from "react-dom/client";
import App from "./app";
import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import {StrictMode, Suspense} from "react";
import Contact from "@/components/contact";
import {LazyAbout} from "@/components/lazy.about";


const domNode = document.querySelector('#root');

const root = createRoot(domNode)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Link to="/">Go to home</Link>,
        children: [
            {
                path: "about",
                element: <Suspense fallback={<div>Loading...</div>}><LazyAbout/></Suspense>
            },
            {
                index: true,
                element: <Contact/>
            }
        ]
    },
]);

root.render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>
);