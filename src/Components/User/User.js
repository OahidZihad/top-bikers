import React from 'react';
import Calculation from '../Calculation/Calculation';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const User = (props) => {
    // console.log(props);
    return (
        <div className="user-main">
            <div className="user-pic">
                <img src={props.image} alt=""/>
            </div>
            <div className="user">
                <h3>User Name: {props.name} </h3>
                <p>Email Address: {props.email}</p>
                <p>Gender: {props.gender}</p>
                <p>Phone: {props.phone}</p>
                <p>Salary: {props.salary}</p>
                <button className="main-button" onClick={() => props.handleAddUser(props.salary)}>
                    <FontAwesomeIcon icon={faUserPlus} /> Add User</button>
            </div>
        </div>
    );
};

export default User;