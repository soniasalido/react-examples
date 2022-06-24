import React from "react";

export const MyChildComponent = () => {
  React.useEffect(() => {
    console.log("El componente se acaba de montar en el DOM");

    // Es siguiente trozo de código se ejecuta cuando el componente se desmonta.
    // CLEANUP FUNCTION --> Se pueden usar:
    // 1. Cuando me monto y me desmonto: },[]); <--- Sin depencendias
    // 2. Cuando le pasamos dependencias, cuando las dependencias cambian, se ejecutará primero el código que tengamos
    // en el cleanup function y después, se ejecutará el código que tengamos en el useEffect, en la funcion efecto.
    return () => console.log("El componente se acaba de desmontar del DOM");
  }, []);

  return <h4>Hello form child component</h4>;
};

export const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  return (
    <>
      {visible && <MyChildComponent />}
      <button onClick={() => setVisible(!visible)}>
        Toggle Child component visibility
      </button>
    </>
  );
};
