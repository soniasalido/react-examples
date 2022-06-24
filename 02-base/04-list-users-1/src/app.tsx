import React, { useEffect, useState} from "react";


/* datos mock */
// const membersMock = [
//   {
//     id: 14540103,
//     login: "antonio06",
//     avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4",
//   },
//   {
//     id: 1457912,
//     login: "brauliodiez",
//     avatar_url: "https://avatars1.githubusercontent.com/u/1457912?v=4",
//   },
// ];


export const App = () => {
    /*
        Para que los datos permanezcan necesitaremos un estado.
        Cada vez que ejecute setMembers, se va a actualizar el estado.
    */
    const [members, setMembers] = useState([]);

    /*
         useEffect se ejecuta una sola vez, cuando el componente se monta.
         La petición de datos de la API se hace en el useEffect, para que solamente lo haga al cargar el componente.
         Si no lo metemos dentro del useEffect cada vez que se re-renderice se volverá a ejecutar la petición de datos de la API.
         La dependencia es un array vacío, porque no hay ninguna dependencia.
         Al pasar este array vacío, se ejecuta solamente una vez, cuando el componente se monta.
         Con la respuesta del fetch, seteamos el estado de la app.
    */


    useEffect(() => {
        fetch("https://api.github.com/orgs/lemoncode/members")
            .then((response) => response.json())
            .then((response) => {
                setMembers(response);
            });
    }, []);


    /*
    Cuando usamos el return de una función en un componente, solamente se puede retornar un objeto a la vez.
    Los Fragmentos nos permiten agrupar una lista de hijos sin agregar nodos extra al DOM.
    Los Fragmentos son una forma de agrupar elementos de React.
    Sintaxis larga: React.Fragment
    Sintaxis corta: <> </>

    Cada hijo en la lista debe tener un único key. Cuando se declara un componente en React, es importante
    para react asignar un atributo clave a cada elemento que se renderiza.
    React identifica los elementos que se renderizan y los que no. Si no se le asigna un key a un elemento,
    React no sabe que elemento se está renderizando.
    */
    return (
        <div className="user-list-container">
            <span className="header">Avatar</span>
            <span className="header">ID</span>
            <span className="header">Login</span>
            {members.map((item) => (
                <React.Fragment key={item.id}>
                    <img src={item.avatar_url} alt="foto"/>
                    <span>{item.id}</span>
                    <span>{item.login}</span>
                </React.Fragment>
            ))}
        </div>
    );
};
