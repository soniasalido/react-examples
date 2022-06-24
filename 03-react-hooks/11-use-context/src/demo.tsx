import React from "react";
import {LoggedUser} from "./logged-user";
import {EditUser} from "./edit-user";

interface UserContextModel {
  username: string;
  setUsername: (value: string) => void;
}


// Creamos un contexto de usuario tipado como UserContextModel.
export const MyContext = React.createContext<UserContextModel>({
  username: "",
  setUsername: (value) => {},
});


// Necesitamos un provider para poder usar el contexto.
// Un provider es un componente de React que provee el contexto
// Devuelve el contexto y una función para setear el valor del contexto
// Todos los providers tienen unas props que son los valores del contexto, de los que dependen los hijos.
// Los hijos pueden acceder a los valores del contexto mediante la función que devuelve el contexto.
// Los hijos que vienen en las props del provider.
// El value tiene que ser del tipo del contexto.
// El value es un objeto que contiene los valores del contexto: un estado y el setter del estado.
// Metemos asi en contexto un objeto que contiene el estado y el setter del estado.
export const MyContextProvider = (props) => {
  const [username, setUsername] = React.useState("John Doe");

  return (
    <MyContext.Provider value={{ username, setUsername }}>
      {props.children}
    </MyContext.Provider>
  );
};


// Montamos en compponente LoggedUser que accede directamente al contexto de usuario. No le pasamos nada por props.
// En el componente EditUser le pasamos el contexto de usuario y si modificamos el usuario, el contexto se actualiza.
export const MyComponent = () => {
  const myContext = React.useContext(MyContext);

  return (
    <>
      <h3>{myContext.username}</h3>

      <LoggedUser />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dignissim pulvinar orci, sit amet sodales
        ligula pretium in. Aenean ut felis mauris. Sed scelerisque eros lectus, et tristique nisi dictum vel. Sed massa mauris, accumsan sed felis vel, placerat facilisis turpis. Mauris eleifend et nunc quis interdum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed facilisis viverra risus at efficitur. Phasellus felis nibh, tincidunt tincidunt nisi a, tristique hendrerit velit.
      </p>


      <EditUser />
    </>
  );
};
