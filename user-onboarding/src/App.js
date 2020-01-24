import React from 'react';
import UserForm from './components/UserForm/UserForm';
import logo from './logo.svg';
import './App.css';

function App()
{
    return (
        <div className="App container">
            <header>
                <h1>User Onboarding</h1>
            </header>
            <UserForm />
        </div>
    );
}

export default App;
