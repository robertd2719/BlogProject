import './App.css';
import {BrowserRouter as Router, Link, Route, Routes, useParams} from 'react-router-dom';
import Blogs from "./components/Blogs";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import NavBar from "./components/NavBar";


function App() {
    return (
        <Router>
            <NavBar/>
            <Routes path="/">
                <Route path="/" element={<Blogs/>}/>
                <Route path="blogs/:id" element={<BlogDetails/>}/>
                <Route path="about" element={<About/>}/>
            </Routes>
        </Router>
    );

}

export default App;
