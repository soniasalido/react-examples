
import React from 'react';
import { useState } from 'react';


interface Props{
    user: {
        name: string;
        lastName: string;
    },
    onReset: () => void;
}


// Usamos React.memo para que el componente no se vuelva a renderizar si no se cambia el estado
// React.memo guarda en caché el resultado de la última ejecución del componente.
// Si los argumentos son los mismos entonces en vez de volver a ejecutarse, devuelve el valor que tiene en caché.
// Si modificamos name o lastName, el componente se vuelve a renderizar.
// Si modificamos address, el componente no se vuelve a renderizar por el uso del patron memoize.
const DisplayUserName = React.memo((props: Props)=> {
    const { user, onReset } = props;

    console.log("Hey I'm rendering anda displaing the user name: ", user);

    return (
        <>
            <div>
                {user.name} {user.lastName}
                <button onClick={()=> onReset()}>Resset!!!</button>
            </div>
        </>
    );
});


export const MyComponent = () => {
    const  [name, setName] = useState("John");
    const [lastName, setLastName] = useState("Doe");
    const [address, setAddress] = useState("123 Main St");


    // El hook useMemo es una función que nos permite memorizar el resultado de una función.
    // Si el resultado de la función es el mismo, no se ejecuta la función.
    // useMemo se ejecuta si las dependencias cambian.
    // Si cambiamos la dirección no se renderiza ya que está fuera de las dependencias.
    const user = React.useMemo( () => {
        return {
            name,
            lastName,
        };
    }, [name, lastName]);


    // useCallback es una función que nos permite memorizar una función.
    // Si la función es la misma, no se ejecuta la función.
    const handleReset = React.useCallback(() => {
        setName("");
        setLastName("");
        setAddress("");
    }, []);


    return (
        <>
            <DisplayUserName user={user} onReset={handleReset} />
            <input value={name} onChange={(e) => setName(e.target.value)} />
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input value={address} onChange={(e) => setAddress(e.target.value)} />
        </>
    )
}