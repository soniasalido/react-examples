import React from "react";

/*
    Este componente es responsable de renderizar un única fila de la tabla.
    Devuelve un JSX que pinta una fila de la tabla.
    Recibe un objeto de tipo Member como propiedad.
    Componente member-row es cada elemento de la fila de cada resultado de la API.
    Devuelve un elemento de tipo React.ReactElement que es una fila de la tabla de miembros.

*/

/*
    Importamos member-row.model para poder usarlo en el código.
    vm es view model (modelo de la vista). Para evitar colisiones de nombres.
*/
import * as vm from "./member-row.model";


/*
    La fila recibirá un miembro como una prop. Para poder acceder a los datos del miembro.
    El miembro es un objeto que contiene los datos de cada miembro.
    Los argumentos de entrada en un componente siempre son las propiedades, props. Un objeto props.
*/
interface Props {
  item: vm.Member;
}


export const MemberRow = (props: Props) => {
  /* Hacemos destructuring a las props para evitar tener que poner props.item.login  --> item.login  */
  const { item } = props;
  return (
    <React.Fragment key={item.id}>
      <img src={item.avatar_url} />
      <span>{item.id}</span>
      <span>{item.login}</span>
    </React.Fragment>
  );
};
