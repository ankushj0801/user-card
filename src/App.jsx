import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserCard from './UserCard';
import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleGetUsers = () => {
    setIsLoading(true);
    // setUsers([]);
    axios.get('https://reqres.in/api/users?page=1').then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
    }).catch((err) => {
      console.log(err.message);
    });
    setIsLoading(false);
  };
  

  return (

    <div>
      <Navbar handleGetUsers={handleGetUsers} />
      {isLoading ? (
        <div className="loader"></div>
      ) : (
        <div className="card-grid">
          {users && users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
