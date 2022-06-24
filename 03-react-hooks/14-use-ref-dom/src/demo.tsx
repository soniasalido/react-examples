import React from "react";

// useRef, usa una referencia. No cambias el contenido sino la referencia..
// useRef recibe un valor por defecto.
// Cuando necesitemos un estado, pero no queremos provocar re-render, entonces usamos useRef.
//

export const MyComponent = () => {
  const containerElementRef = React.useRef(null);
  const [message, setMessage] = React.useState(
    "Click button to get container width"
  );

  const calculateContainerWidth = () => {
    setMessage(`Container width: ${containerElementRef.current.clientWidth}px`);
  };

  return (
    <div className="container" ref={containerElementRef}>
      <h2>{message}</h2>
      <button onClick={calculateContainerWidth}>
        Calculate container width
      </button>
    </div>
  );
};
