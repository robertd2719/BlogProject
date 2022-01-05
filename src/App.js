import './App.css';
import {BrowserRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom';
import Blogs from "./components/Blogs";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import NavBar from "./components/NavBar";
import AddBlog from "./components/AddBlog";
import {useState,useEffect} from "react";

function App() {

    return (
        <Router>
            <NavBar/>
            <Routes path="/">
                <Route path="/" element={<Blogs/>}/>
                <Route path="blogs/:id" element={<BlogDetails/>}/>
                <Route path="new" element={<AddBlog/>}/>
            </Routes>
        </Router>
    );

}

export default App;
