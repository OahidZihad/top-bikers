import logo from './logo.svg';
import './App.css';
import users from './MOCK_DATA.json';
import User from './Components/User/User';
import { useEffect, useState } from 'react';
import Calculation from './Components/Calculation/Calculation';

function App() {
  const first15 = users.slice(0,15);
  const [user15, setuser] = useState(first15);
  const [salary, setSalary] = useState([]);
  const [selectedUser, setSelectedUser] = useState(0);

  const handleAddUser = (mySalary) => {
    setSelectedUser(selectedUser+1);
    // console.log('added user', mySalary);
    const newSalary = [...salary, mySalary];
    setSalary(newSalary);
  }

  useEffect(() => {
    setuser(user15);
  }, [])

  return (
    <div className="App">
      <div className="user-container">
        {
          user15.map(userInfo => 
            <User 
              handleAddUser = {handleAddUser}
              name={userInfo.name}
              email={userInfo.email}
              gender={userInfo.gender}
              phone={userInfo.phone}
              salary={userInfo.salary}
              image={userInfo.image}>
            </User>)
        }
      </div>
      <div>
        {
          <Calculation total={user15.length} selectedUser={selectedUser} salary={salary}></Calculation>
        }
      </div>
    </div>
  );
}

export default App;
