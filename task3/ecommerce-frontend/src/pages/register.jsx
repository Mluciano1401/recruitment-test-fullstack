import './styles/form.css'

function Register() {

  return (
    <>
      <form action="" className="form-wrap">
        <div className="form-content">
            <label>
                Email:
            </label>
            <input type='text' className='input'/>
            <label>
                Password:
            </label>
            <input type="password" className="input" />
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
