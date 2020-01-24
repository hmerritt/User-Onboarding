import React, { useState } from 'react';
import UserForm from './components/UserForm/UserForm';
import UserList from './components/UserList/UserList';
import logo from './logo.svg';
import './App.css';

function App()
{

    //  Users array
    const [users, setUsers] = useState([
        {
            fullname: 'John Doe',
            email: 'john@doe.com',
            password: 'johndoe77'
        }
    ]);

    return (
        <div className="App container">
            <header>
                <h1>User Onboarding</h1>
            </header>

            {/*  Add user Form  */}
            <UserForm users={users} setUsers={setUsers} />

            {/*  Users  */}
            <UserList users={users} />
        </div>
    );
}

export default App;
