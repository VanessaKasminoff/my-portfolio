import React from "react";

const LogoCard = (props) => {
    return (
        <div className="logo-card">
            <img className="logo-card-img" src={props.logoImg} alt="Image of logo"/>
        </div>
    )
}

export default LogoCard