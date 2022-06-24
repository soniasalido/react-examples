import React from 'react';


export const Demo = () => {
    const [username, setUsername] = React.useState('sonia');
    return (
        <>
            <input
                value={username}
                onChange={(e) => setUsername(e.target.value)
                }}
             />
        </>
    )
}
