import React from "react";

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  console.log("0. console.log del componente padre (MyComponent)");

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};


// --------------------------------------------------------------------------------------------------------------------
const MyChildComponent = () => {
  const [userInfo, setUserInfo] = React.useState({
    name: "John",
    lastname: "Doe",
  });

  React.useEffect(() => {
    console.log("A. Called right after every render --> console.log de useEffect se ejecuta siempre que cambia el estado");

    // Es siguiente trozo de código se ejecuta cuando el componente se desmonta.
    // CLEANUP FUNCTION --> Se pueden usar:
    // 1. Cuando me monto y me desmonto: },[]); <--- Sin depencendias
    // 2. Cuando le pasamos dependencias, cuando las dependencias cambian, se ejecutará primero el código que tengamos
    // en el cleanup function y después, se ejecutará el código que tengamos en el useEffect, en la funcion efecto.
    return () => console.log("B. Cleanup function called after every render  --> console.log cuando se desmonta el componente");
  });

  return (
    <div>
      <h3>
        {userInfo.name} {userInfo.lastname}
      </h3>
      <input
        value={userInfo.name}
        onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
      />
      <input
        value={userInfo.lastname}
        onChange={(e) => setUserInfo({ ...userInfo, lastname: e.target.value })}
      />
    </div>
  );
};
