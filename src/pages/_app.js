import Router from 'next/router';
import {ToastContainer} from 'react-toastify';

import NProgress from 'nprogress';
import "nprogress/nprogress.css";

import "../../tailwindcss/style.css";
import "react-toastify/dist/ReactToastify.css";
// import "tailwindcss/tailwind.css";

NProgress.configure({}); //showSpinner: false
Router.events.on("routerChangeStart", () => NProgress.start());
Router.events.on("routerChangeComplete", () => NProgress.done());
Router.events.on("routerChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return (
        <> 
            <Component { ...pageProps } />
            <ToastContainer position="top-center"></ToastContainer> 
        </>
    );
}

export default MyApp;