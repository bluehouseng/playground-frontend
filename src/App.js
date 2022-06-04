import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState({})
  const [message, setMessage] = useState({})

  function updateState(event) {
    const { name, value } = event.target;
    const obj = {...data}
    obj[name] = value
    setData(obj);
  }

  function httpRegisterUser(event) {
    event.preventDefault()
    fetch('http://192.168.1.171:1050/register', {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      method: 'post'
    })
    .then(response => response.json())
    .then(data => setMessage(data))
    .catch(err => console.log(err))
  }

  return (
    <>
    <div className='App'>
      <form className='' style={{paddingBottom: '2rem'}} onSubmit={httpRegisterUser}>
        {message.successful && <p>{message.message}</p>}
        <input className='form-control' name="fullName" onChange={updateState} placeholder='Enter fullname'/><br></br>
        <input className='form-control' name="username" onChange={updateState} placeholder='Enter username'/><br></br>
        <input className='form-control' name="phone" onChange={updateState} placeholder='Enter mobile no.'/><br></br>
        <input className='form-control' name="email" onChange={updateState}  placeholder='Enter email' type="email"/><br></br>
        <input className='form-control' name="password" onChange={updateState} placeholder='******' type="password"/><br></br>
        <select className='form-control'name="gender" onChange={updateState}>
          <option>select gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
          <option value="others">others</option>
        </select><br></br>
        <button type='submit' style={{padding: '1rem', width: '20rem'}}>submit</button>
      </form>
    </div>
    </>
  );
}

export default App;

/**
  {
    fullName: "",
    password: "",
    email: "",
    phone: "",
    gender: "",
    username: ""
  }
**/