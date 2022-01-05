import {useState,useEffect} from 'react';


export default function AddBlog({blog}){
    const [username, setUserName] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');

    function formattedDatetime(date){

    }

    return(
        <div>
            <form action="" className="new__blog__form">
                <div className="form__field">
                    <label htmlFor="username">USER: </label>
                    <input type="text" id="username" value={username} onChange={e=>setUserName(e.target.value)}/>
                </div>
                <div className="form__field">
                    <label htmlFor="title">TITLE: </label>
                    <input type="text" id="title" value={title} onChange={e=>setTitle(e.target.value)}/>
                </div>
                <div className="form__field">
                    <label htmlFor="summary">SUMMARY: </label>
                    <input type="text" name="summary" id="summary"/>
                </div>
                <div className="form__field">
                    <label htmlFor="content">CONTENT:</label>
                    <textarea name="content" id="content" cols="54" rows="10"></textarea>
                </div>
            </form>
        </div>
    )
}