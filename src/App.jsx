import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import UserCard from './UserCard';
import "./style.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const handleGetUsers = () => {
    setIsLoading(true);
    // setUsers([]);
    axios.get(`https://reqres.in/api/users?page=${pageNumber}`).then((response) => {
        console.log(response.data);
        setUsers(response.data.data);
    }).catch((err) => {
      console.log(err.message);
    });
    if(pageNumber === 2) {setPageNumber(1)}else{setPageNumber(pageNumber + 1)}
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
