import React from "react";

export default function User(props) {
    return (
        <div className="user">
            <img src={props.profilePic} className="profile-img"/>
            <h1>{props.firstName}</h1>
            <h2>{props.lastName}</h2>
        </div>
    )
}