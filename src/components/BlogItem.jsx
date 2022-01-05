export default function BlogItem(props) {
    const {username, title, summary, localDate} = props.item;
    return (
        <div className="card">
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