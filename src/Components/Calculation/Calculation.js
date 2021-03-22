import React from 'react';
import './Calculation.css';

const Calculation = (props) => {
    console.log(props.salary);
    const totalSalary = props.salary.reduce((sum,salary) => sum + salary,0);
    // let totalSalary = 0;
    // for (let i = 0; i < props.salary.length; i++) {
    //     const element = props.salary[i];
    //     totalSalary = totalSalary + element;
    // }
    return (
        <div className="calculation">
            <h3 className="user-summary">User Info</h3>
            <p className="user-number">Total Users: {props.total}</p>
            <p>Selected User: {props.selectedUser}</p>
            <p>Total Salary: {totalSalary}</p>
        </div>
    );
};

export default Calculation;