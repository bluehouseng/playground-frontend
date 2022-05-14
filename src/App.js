import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 
  const [ users, setUsers] = useState([])

  function onSubmitForm(event) {
    event.preventDefault();
    console.log(email)
    console.log(password)
  }

  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res =>  res.json())
    .then(data => setUsers(data))
    .catch(err => console.log(err))
    
  }, [])
  
  console.log(users);
  return (
    <div className="App">
      {/* <form onSubmit={onSubmitForm}>
        <input onChange={event => setEmail(event.currentTarget.value)} placeholder="Email"/> <br></br>
        <input onChange={event => setPassword(event.currentTarget.value)} placeholder="Password" type="password"/><br></br>
        <button type='submit'>Submit</button>
      </form> */}

      <ul style={{textAlign: 'start'}}>
        {
          users.map(item => <li key={item.id}>{item.name || item.title}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
