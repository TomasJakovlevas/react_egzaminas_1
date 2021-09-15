import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Task4() {
  // Hooks
  // -- state
  const [users, setUsers] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  // sideEffect
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
      setisLoading(false);
    });
  }, []);

  return (
    <div>
      <h3>Task 4</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Adress</th>
              <th>Phone</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <th>{user.name}</th>
                <th>{user.email}</th>
                <th>
                  {user.address.street} {user.address.city}
                </th>
                <th>{user.phone}</th>
                <th>{user.company.name}</th>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Task4;

/* Task 4
Atkurkite lentelę, kurioje bus randama ši informacija apie vartotoją:
- name;
- email;
- address (street + city pvz.: "Kulas Light, Gwenborough");
- phone;
- company (name).

Informaciją imkite iš čia: https://jsonplaceholder.typicode.com/users

Pastaba: naudokite useState, useEffect.
*/
