import React, { useState, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { registerFun } from '../Store/redux/slices/userSlice.js';
import { Link } from 'react-router-dom';
import BG from '../component/bg/bg_stars';
const Reg = () => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    return (
        <Fragment>
            <div className='container-fluid auth_container'>
                <BG />
                <div className='auth_form'>
                    <h4>Register a new account</h4>
                    <input type="text" className='form-control' onChange={(e) => { setUserName(e.target.value) }} placeholder='User' />
                    <input type="text" className='form-control' onChange={(e) => { setPassword(e.target.value) }} placeholder='Password' />
                    <button className='btn w-100' onClick={() => { dispatch(registerFun({ userName, password })) }}> Register </button>
                    <p>Go to <Link to='/'>Home Page</Link> or let's <Link to='/login'>Login Page</Link> now</p>
                </div>
            </div>
        </Fragment >
    );
}

export default Reg;
