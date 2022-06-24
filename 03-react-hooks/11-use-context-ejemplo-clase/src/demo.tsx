import React from 'react';
import {EditUser} from "./edit-user";
import {LoggedUser} from "./logged-user";
import {MyProvider} from "./myProvider";


export const Demo = () => {
    const [username, setUsername] = React.useState('sonia');
    return (
        <>
            <MyProvider>
                <EditUser />
                <LoggedUser />
            </MyProvider>
        </>
    )
}
