import {useNavigate} from "react-router-dom";

export default function BlogItem({blog}) {
    const {id, username, title, summary, localDate} = blog;

    let navigation = useNavigate();

    function selectBlog() {
        navigation(`blogs/${id}`);
    }

    return (
        <div className="card" onClick={selectBlog}>
            <div className="card__left">
                <div className="card__title">{title}</div>
                <span className="card__summary"><i>{summary}</i></span>
            </div>
            <div className="card__right">
                <div className="card__date">{localDate}</div>
                <span className="card__userName">{username}</span>
            </div>
        </div>
    )
}