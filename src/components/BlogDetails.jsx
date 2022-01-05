import {useParams} from "react-router-dom";
import {useEffect,useState} from 'react';

export default function BlogDetails({blogs}){

    const {id} = useParams();
    return (
        <div>
            <h3>You were searching for blog: {id}</h3>
        </div>
    )
}