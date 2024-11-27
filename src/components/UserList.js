import React, { useState, useEffect } from 'react';
import axios from 'axios';



function UserList() {
  // Step 5: State for storing users
  const [listOfUser, setListOfUser] = useState([]);

  // Step 4: Fetching data using useEffect
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        // Save data to state
        setListOfUser(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  // Step 6: Render the list of users
  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {listOfUser.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;