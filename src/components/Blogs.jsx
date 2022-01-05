import {useEffect,useState} from 'react';
import BlogItem from "./BlogItem";

export default function Blogs({blogs}){

    return(
        <div>
            {blogs.map(blog => <BlogItem blog={blog}/>)}
        </div>
    )
}