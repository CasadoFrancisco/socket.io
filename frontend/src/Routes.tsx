import React from "react"
import { Route, Routes } from "react-router-dom";
import { HomeComponent } from "./page/home/Home";

export const RouterComponent:React.FC = ()=>{
    return(
        <Routes>
            <Route path="/" element={<HomeComponent/>}/>
        </Routes>
    )
}