import { useState } from 'react'; 
import './styles/form.css'
import * as api from '../services/product.service';
import  { useNavigate } from 'react-router-dom';

function ProductForm() {
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
        let token = sessionStorage.getItem('token');
        const result = await api.postProduct(valid, token);        
        setMsg(result);
        navigate('/products');
    }
  return (
    <>
     <div className='backgroud'>
        <form onSubmit={submit} className="form-wrap">
            <h1>Products</h1>
            <div className="form-content">
                <label>
                    Name:
                </label>
                <input type='text' className='input-control' name="name"
                value={valid.name || ""} onChange={handleChange} required/>
                <label>
                    Price:
                </label>
                <input type="number" className="input-control" name="price"
                value={valid.price || ""} onChange={handleChange} required/>
                <label>
                    Description:
                </label>
                <input type='text' className='input-control' name="desc"
                value={valid.desc || ""} onChange={handleChange} required/>
                <label>
                    Image:
                </label>
                <input type='file' className='input-control' name="img" accept="image/*"
                value={valid.img || ""} onChange={handleChange} required/>
        </div>
        <div className="box-msg">
            <p color="red">{msg}</p>
        </div>
        <div className="form-box-buttons">
                <button type='submit'>Add</button>
                <button><a href='/products'>Cancel</a></button>
        </div>
        </form>
     </div>
    </>
  )
}

export default ProductForm
