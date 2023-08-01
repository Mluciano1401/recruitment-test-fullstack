import './styles/form.css'

function ProductForm() {

  return (
    <>
      <form action="" className="form-wrap">
        <div className="form-content">
            <label>
                Name:
            </label>
            <input type='text' className='input-control'/>
            <label>
                Price:
            </label>
            <input type="number" className="input-control" />
            <label>
                Description:
            </label>
            <input type='text' className='input-control'/>
            <label>
                Image:
            </label>
            <input type='image' className='input-control'/>
       </div>
       <div className="box-msg">
        
       </div>
       <div className="form-box-buttons">
            <button>Create</button>
            <button>Cancel</button>
       </div>
      </form>
    </>
  )
}

export default ProductForm
