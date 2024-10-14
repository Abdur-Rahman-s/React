import React, { useContext } from "react";
import { userContext } from "../../App";

export function ChildC() {
    const user = useContext(userContext);
    

    return(
        <>
            <div>
                {user.Name}
            </div>
        </>
    )
}