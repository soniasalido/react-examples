import React from "react";

interface Props {
  name: string;
}

// memoize es un patrón que guarda en caché el resultado de la última ejecución. Si en la siguiente ejecución
// los argumentos son los mismos, entonces en vez de volver hacer la ejecucuón, da el resultado de la última ejecución
// que tenía en caché. Con React.memo se puede usar para que el componente se renderice solo si los props son diferentes.
// React.memo wrapeamos nuestro componente para que se renderice sólo si los props son diferentes.

export const DisplayUsername = React.memo((props: Props) => {
  console.log(
    "Hey I'm only rerendered when name gets updated, check React.memo"
  );

  return <h3>Nombre: {props.name}</h3>;
});

export const MyComponent = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: " John ",
    lastname: "Doe",
  });


  // Llamamos al componente DisplayUserName con props = userInfo. Sólo cuando cambia el prop name, se renderiza el componente.
  // Si lo que cambia es el lastname, no se renderiza el componente, ya que entra el patrón de memo.
  return (
    <>
      <DisplayUsername name={userInfo.name} />
      <input
        value={userInfo.name}
        onChange={(e) =>
          setUserInfo({
            ...userInfo,
            name: e.target.value,
          })
        }
      />
      <input
        value={userInfo.lastname}
        onChange={(e) =>
          setUserInfo({
            ...userInfo,
            lastname: e.target.value,
          })
        }
      />
    </>
  );
};
