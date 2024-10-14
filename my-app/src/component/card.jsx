import React from "react" 
import ImageOne from "../assets/ImageOne.jpg";
import "./card.css"

const MyCard = function(props) {
    return(
        <>
            <div className="user-container" >
                <p id="name">{props.name}</p>
                <img id="user-img" src={props.iamge} alt="card-image" />
                <p id="title">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, veniam.</p>
            </div>
        </>
    )
}

export default MyCard ;