import React from 'react';
import {useNavigate} from "react-router-dom";

export default function About(){

    const navigation = useNavigate();

    function goToBlog(id){
        navigation(`/blogs/${id}`);
    }

    return (
        <React.Fragment>
            <h3>A simple program to allow users to add blogs and various other things</h3>
            <button onClick={()=>goToBlog(12)}>BlogList</button>
        </React.Fragment>
    );
}