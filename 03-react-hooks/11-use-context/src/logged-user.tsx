
import React from "react";
import { MyContext } from "./demo";

// Usa el contexto de usuario
export const LoggedUser = () => {
    const { username } = React.useContext(MyContext);
    return (
        <>
            <div>
                <h3>{username}</h3>
            </div>
        </>
    );

};