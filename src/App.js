import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('') 

  function onSubmitForm(event) {
    event.preventDefault();
    console.log(email)
    console.log(password)
  }

  
  
  return (
    <div className="App">
      <form onSubmit={onSubmitForm}>
        <input onChange={event => setEmail(event.currentTarget.value)} placeholder="Email"/> <br></br>
        <input onChange={event => setPassword(event.currentTarget.value)} placeholder="Password" type="password"/><br></br>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
