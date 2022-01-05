import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react';

export default function BlogDetails({blogs}) {
    const [dislayBlog, updateDisplayBlog] = useState(null);
    const {id} = useParams();

    function findBlog() {
        return blogs.find(blog => blog.id === parseInt(id));
    }
    const blog = findBlog();


    return (
        <div>
            {!blog ? <h3>That blog does not exist</h3> : ""}
            <div className="container blog__card">
                <div className="blog__title">
                    {blog.title}
                </div>
                <div className="blog__username">
                    {blog.username}
                </div>
                <div className="blog__body">
                    {blog.content}
                </div>
            </div>
        </div>
    )
}