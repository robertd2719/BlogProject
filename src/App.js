import './App.css';
import {BrowserRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom';
import Blogs from "./components/Blogs";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import NavBar from "./components/NavBar";
import AddBlog from "./components/AddBlog";
import {useState,useEffect} from "react";

//@TODO if there are no blogs show 'no current blogs'

function App() {
    const [blogs,updateBlogs] = useState([])

    async function fetchBlogs(){
        const result = await fetch("http://localhost:8080/api/v1/blogs");
        const data = await result.json();
        updateBlogs(data);
    }

    useEffect(()=>{
        fetchBlogs();
    },[])

    return (
        <Router>
            <NavBar/>
            <Routes path="/">
                <Route path="/" element={<Blogs blogs={blogs}/>}/>
                <Route path="blogs/:id" element={<BlogDetails blogs={blogs}/>}/>
                <Route path="new" element={<AddBlog blogs={blogs} updateBlogs={updateBlogs}/>}/>
            </Routes>
        </Router>
    );

}

export default App;
