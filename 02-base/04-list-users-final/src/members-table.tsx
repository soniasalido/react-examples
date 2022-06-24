import React from "react";
import { MemberRow } from "./member-row";
import { Member } from "./member-row.model";


/*
    Este componente es responsable de renderizar la tabla de miembros.
    Devuelve un JSX que pinta la tabla de miembros.
    Hace el fetch a la api para obtener datos y los mete como un estado de este componente.
    Importamos member-row.model para poder usarlo en el código.
    Importa vm para evitar colisiones de nombres.
    Llama al componente MemberRow para pintar cada fila de la tabla.
*/


/*
    Los argumentos de entrada en un componente siempre son las propiedades, props. Un objeto props.
*/
interface Props {
  org: string;
}


export const MembersTable = (props: Props) => {
  const { org } = props;

  const [members, setMembers] = React.useState<Member[]>([]);


  React.useEffect(() => {
    fetch(`https://api.github.com/orgs/${org}/members`)
      .then((response) => response.json())
      .then((response) => {
        setMembers(response);
      });
  }, []);


  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">ID</span>
      <span className="header">Login</span>
      {members.map((item) => (
        <MemberRow key={item.id} item={item} />
      ))}
    </div>
  );
};
