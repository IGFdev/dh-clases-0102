import React from "react";
import User from "./User";

export default function UserList(props) {
    return (
        <div className="users-list">
            {
                /* Dentro de props, el componente recibe el array de usuarios fetcheados */
                props.users?.length > 0 && /* Bajo la condición de que la longitud del array sea mayor a 0, se renderiza el código que venga después del AND (&&) */
                props.users.map((user, index) => (
                    /* Por cada user que haya en el array recibido por props, se renderiza un componente User, pasándole los datos de cada usuario individualmente */
                    <User
                        key={index}
                        profilePic={user.picture.large}
                        firstName={user.name.first}
                        lastName={user.name.last}
                    />
                ))
            }
        </div>
    );
}