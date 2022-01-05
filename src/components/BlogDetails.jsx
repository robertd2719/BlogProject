import {useParams} from "react-router-dom";

export default function BlogDetails(){

    const {id} = useParams();
    return (
        <div>
            <h3>You were searching for blog: {id}</h3>
        </div>
    )
}