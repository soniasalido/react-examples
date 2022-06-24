import React from "react";
import { useDebounce } from "use-debounce";

// Usa debounce to prevent excessive AJAX calls. Espera 1 segundo para lanzar la petición AJAX
// Se filtra la lista de resultados de la búsqueda por el valor del input: Si ponemos "cl" muestra solo los resultados que contengan "cl"

export const MyComponent = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);
  const deferredFilter = React.useDeferredValue(filter);

  // Load full list when the component gets mounted and filter gets updated
  React.useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${deferredFilter}`
    )
      .then((response) => response.json())
      .then((json) => setUserCollection(json));
  }, [deferredFilter]);

  return (
    <div>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      Filtrado por: {deferredFilter}
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
