import {useState} from 'react';
import {useNavigate} from "react-router-dom";

export default function AddBlog({blogs,updateBlogs}) {
    const [username, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    function formattedDate(date) {
        const year = date.getFullYear();
        const month = date.getMonth()<10 ? `0${date.getMonth()+1}` : date.getMonth+1;
        const day = date.getDay()<10 ? `0${date.getDay()}` : date.getDay()
        return `${year}-${month}-${day}`;
    }

    async function postData(newPost){
        const result = await fetch(`http://localhost:8080/api/v1/blogs`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newPost)
        });
        const data = await result.json();
        updateBlogs([...blogs,data]);
        navigate("/");
    }

    function handleSubmit(e) {
        e.preventDefault();
        const date = formattedDate(new Date())
        const newPost = {
            username: username,
            title: title,
            summary: summary,
            content: content,
            localDate: formattedDate(new Date()),
        }
        postData(newPost);
        setUserName('');
        setTitle('');
        setSummary('');
        setContent('');
    }

    return (
        <div>
            <form onSubmit={e => handleSubmit(e)} className="new__blog__form">
                <div className="form__field">
                    <label htmlFor="username">USER: </label>
                    <input type="text" id="username" value={username} onChange={e => setUserName(e.target.value)}/>
                </div>
                <div className="form__field">
                    <label htmlFor="title">TITLE: </label>
                    <input type="text" id="title" value={title} onChange={e => setTitle(e.target.value)}/>
                </div>
                <div className="form__field">
                    <label htmlFor="summary">SUMMARY: </label>
                    <input type="text" name="summary" id="summary" value={summary}
                           onChange={e => setSummary(e.target.value)}/>
                </div>
                <div className="form__field">
                    <label htmlFor="content">CONTENT:</label>
                    <textarea name="content" id="content" cols="54" rows="10" value={content}
                              onChange={e => setContent(e.target.value)}/>
                </div>
                <div className="form__field">
                    <input type="submit" value="submit"/>
                </div>
            </form>
        </div>
    )
}