import {useEffect,useState} from 'react';
export default function Blogs(){
    const [blogs,updateBlogs] = useState([])

    async function fetchBlogs(){
        const result = await fetch("http://localhost:8080/api/v1/blogs");
        const data = await result.json();
        updateBlogs(data);
    }


    useEffect(()=>{
        fetchBlogs();
    },[])


    return(
        <div>
            {blogs.map(item => <li>{item.title}</li>)}
        </div>
    )
}