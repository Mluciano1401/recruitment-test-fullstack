import {BrowserRouter as Router,Routes, Route, Navigate}  from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';
import ProductForm from '../pages/product';
import PrivateRoute from './PrivateRoute';

export const AppRouter = () => {
    return(
        <Router>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/products' element={<PrivateRoute><Home/></PrivateRoute>}/>
                <Route path='/create' element={<PrivateRoute><ProductForm/></PrivateRoute>}/>

                <Route path='*' element={<Navigate to='/' replace/>}></Route>
            </Routes>
        </Router>
    )
}