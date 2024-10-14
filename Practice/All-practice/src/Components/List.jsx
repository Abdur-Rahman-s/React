import React from "react";
import green from "../assets/greem_cjealed.png"
import imageOne from "../assets/image-one.jpg"
import "./List.css";

function ListItem() {
    return(
        <>
            <div>
                <article>
                    <h1>My First Component</h1>
                    <ul>
                        <li>Component : UI Building Blocks</li>
                        <li>Defining a component</li>
                        <li>Using a component</li>
                    </ul>
                </article>
            </div>
        </>
    )
}

export function Card() {
    return (
        <>
            <div id="Card">
                <img src={imageOne} alt="" className="imageOne"/>
                <p></p>
            </div>
        </>
    )
}

export default ListItem;