import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [update, setUpdate] = useState([]);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
  //     const data = await response.json();
  //     setUpdate(data);
  //   }
  //   fetchData();
  // }, []);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => setUpdate(data));
  }, []);
  return (
    <div>
      <h1>Fetch Api</h1>
      <table border="1">
        <thead>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Phone</td>
          </tr>
        </thead>

        <tbody>
          {update.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
