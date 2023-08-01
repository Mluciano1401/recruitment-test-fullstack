import './styles/form.css'

function Login() {

  return (
    <>
      <form action="" className="form-wrap">
        <div className="form-content">
            <label>
                Email:
            </label>
            <input type='text' className='input-control'/>
            <label>
                Password:
            </label>
            <input type="password" className="input-control" />
       </div>
       <div className="box-msg">

       </div>
       <div className="form-box-buttons">
            <button>Login</button>
            <span>Do you not have an account? <a>create an account!</a></span>
       </div>
      </form>
    </>
  )
}

export default Login
