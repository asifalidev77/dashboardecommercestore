"use client";
import Sidebar from "@/components/Sidebar";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Settings from "./pages/Settings";
export default function Main() {
  return (
  <>
  <BrowserRouter>
  <Routes> 
<Route path="/" element={<Home />}> </Route>
<Route path="/about" element={<About/>}> </Route>
<Route path="/settings" element={<Settings/>}> </Route>

  </Routes>
  </BrowserRouter>
    <Sidebar />
    </>
  );
}
