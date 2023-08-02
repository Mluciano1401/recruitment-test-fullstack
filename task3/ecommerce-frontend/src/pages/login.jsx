import { useState } from 'react'; 
import './styles/form.css'
import * as api from '../services/auth.services';
import  { useNavigate } from 'react-router-dom';

function Login() {
  const [valid, setValid] = useState({});
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValid(values => ({...values, [name]:value}));
  }

  const submit = (e) => {
    e.preventDefault();
    if(!e.target.checkValidity()){
        console.log("error");
    }else{
        verifyUser();
    }
  }
   const verifyUser = async() => {
    const result = await api.loginUser(valid);
    sessionStorage.setItem('token', result.token);
    setMsg("");
    navigate('/products');
   }
  return (
    <>
      <form  onSubmit={submit} noValidate={true} className="form-wrap">
        <h1>Log in</h1>
        <div className="form-content">
            <label>
                Email:
            </label>
            <input type='text' className='input-control' name="email"
            value={valid.email || ""} onChange={handleChange} required/>
            <label>
                Password:
            </label>
            <input type="password" className="input-control" name="password"
            value={valid.password || ""} onChange={handleChange} required/>
       </div>
       <div className="box-msg">
            <p color='red'>{msg}</p>
       </div>
       <div className="form-box-buttons">
            <button type="submit">Login</button>
            <span>Do you not have an account? <a>create an account!</a></span>
       </div>
      </form>
    </>
  )
}

export default Login
