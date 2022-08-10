import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { FeedPage } from "../pages/FeedPage/FeedPage";
import { LoginPage } from "../pages/LoginPage/LoginPage";
import { PostPage } from "../pages/PostPage/PostPage";
import { SignUpPage } from "../pages/SignUpPage/SignUpPage";

function Router() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path="/cadastro" element={<SignUpPage/>}/>
            <Route path="/feed" element={<FeedPage/>}/>
            {/* <Route path="/post" element={<PostPage/>}/> */}
            <Route path="/post/:slug" element={<PostPage/>}/>
            
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  
  export default Router;