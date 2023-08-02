import './styles/form.css'

function Register() {

  return (
    <>
      <form action="" className="form-wrap">
        <h1>register</h1>
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
            <button>Create</button>
            <span>Do you have a account? <a>login!</a></span>
       </div>
      </form>
    </>
  )
}

export default Register
