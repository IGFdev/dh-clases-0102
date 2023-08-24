import logo from './logo.svg'; // const logo = require('./logo.svg')
import React, { useRef, useState, useEffect } from 'react';
import './static/css/App.css';
import UserList from './components/UserList';

function App() {
  const quantityInput = useRef(null);
  const [results, setResults] = useState(0);
  const [users, setUsers] = useState([]);

  // Cuando el botón es clickeado, se actualiza el state de results (se guarda lo que el usuario escribió en el input)
  const handleGenerate = () => {
    setResults(quantityInput.current.value);
  }

  useEffect(() => {
    /* Cuando el state de results cambia, se ejecuta todo el proceso de fetchear a la API con el nuevo valor de cantidad de resultados, según el usuario ingresó en el input */
    const endpoint = `https://randomuser.me/api/?results=${results}`;

    const fetchApi = async (endpoint) => {
      const response = await fetch(endpoint);
      const data = await response.json();

      setUsers(await data.results);
    }

    fetchApi(endpoint);
  }, [results]); /* Se ejecuta la función del useEffect cuando el state results cambie */


  return (
    <>
      <input ref={quantityInput} type='number' max={5000} />
      <button onClick={handleGenerate}>Generar</button>

      {/* Al componente UserList se le pasa el array de usuarios ya fetcheados, y solo se encarga de renderizarlos */}
      <UserList
        users={users}
      />
    </>
  );
}

export default App;

/* 
  useEffect: 
    - 1° caso: no pasamos array, el useEffect se ejecuta siempre que el componente sea renderizado
    - 2° caso: el array esta vacío, el useEffect solo se ejecuta una vez
    - 3° caso: pasamos variables de state en el array, el useEffect se ejecuta siempre que esas variables cambien su valor
*/

/* 
  - Declaramos results y setResults para dentro guardar la cantidad de usuarios que se requieren
  - Declaramos users y setUsers para tener nuestra variable de state
  - Mediante useEffect, cuando haya un cambio en results (cuando el usuario haya ingresado un número en el input) ejecutamos la función que fetchea a la API
  - Cuando se termina de fetchear a la API, actualizamos nuestra variable de state users por el nuevo array de usuarios recién fetcheados
  - En el retorno de nuestro componente, pasamos por props a UsersList el array de usuarios recién fetcheado
  - UsersList se va a encargar de renderizar un componente de User por cada user que haya en el array de users
*/