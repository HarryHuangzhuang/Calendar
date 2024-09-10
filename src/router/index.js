import React from 'react';
import Layout from "../pages/Layout";
import Login  from "@/pages/Login"

import { createBrowserRouter } from 'react-router-dom';
import { AuthRoute} from "@/components/AuthRoute"
import Home from '@/pages/Home';
import Article from '@/pages/Article';
import Publish from '@/pages/Publish';

const router =  createBrowserRouter([
    {
        path:"/",
        element  :<AuthRoute> <Layout /></AuthRoute>,
        children:[
            {
                path: 'home',
                elment:<Home />

            },
            {
                path: 'article',
                elment:<Article />

            },
            {
                path: 'publish',
                elment:<Publish />

            },

        ]
    },
    {
        path:"/login",
        element  :<Login/>

    },



]
)  

export default router