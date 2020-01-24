import React from 'react';
import './UserList.css';

function UserList({ users })
{
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Password Length</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item, key) =>
                    {
                        return (
                            <tr key={key}>
                                <td> {item.fullname} </td>
                                <td> {item.email} </td>
                                <td> {item.password.length} </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default UserList;
