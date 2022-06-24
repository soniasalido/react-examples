import React from "react";
import { MyContext } from "./demo";

export const EditUser = () => {
    const { username, setUsername } = React.useContext(MyContext);

    return (
        <>
            <input value={username} onChange={(e) => setUsername(e.target.value)} />
        </>
    );
};