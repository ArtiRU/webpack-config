import './assets/styles/global.scss'
import {createRoot} from "react-dom/client";
import App from "./app";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from "react-router-dom";
import {StrictMode, Suspense} from "react";
import Contact from "@/components/contact";
import {LazyAbout} from "@/components/lazy.about";


const domNode = document.querySelector('#root');

const root = createRoot(domNode)


root.render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/about" element={<Suspense fallback={<div>Loading...</div>}><LazyAbout/></Suspense>} />
                <Route path="/contact" element={<Contact/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);