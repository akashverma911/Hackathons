import React from "react";
import { Route, Routes } from 'react-router-dom';
import ArticleDetailView from "./containers/ArticleDetailView";
import ArticleListView from "./containers/ArticleListView";
import Login from "./containers/Login";
import Signup from './containers/Signup'
import HackathonListView from "./containers/HackathonListView";
import Profile from "./containers/Profile";
// import HackathonDetailView from "./containers/HackathonDetailView";

const BaseRouter = () => (
    <Routes>
        <Route exact path='/' element={< ArticleListView />} />
        <Route exact path='/hackathonList' element={< HackathonListView />} />
        {/* <Route exact path='/hackathonList/:hackathonID' element={< HackathonDetailView/>} /> */}
        <Route exact path='/:articleID' element={< ArticleDetailView />} />
        <Route exact path='/login' element={< Login />} />
        <Route exact path='/signup' element={< Signup />} />
        <Route exact path='/profile' element={< Profile />} />
    </Routes>
)
export default BaseRouter;