import{useState} from "react";

function Form () {
  const [email, setEmail] = useState({})
  const [password, setPassword] = useState({})

  function handleSubmit(e){
         e.preventDefault();
  }


    return(
        <form onSubmit={handleSubmit}>
        <div className="App">
        <input className='form-control' name="email"  onChange={(e)=>setEmail(e.target.value)}  placeholder='Enter email' type="email"/><br></br>
        <input className='form-control' name="password" onChange={(e)=>setPassword(e.target.value)} placeholder='******' type="password"/><br></br>
        <button type="submit">Submit</button>
        </div>
        </form>
    )
}

export default Form;
