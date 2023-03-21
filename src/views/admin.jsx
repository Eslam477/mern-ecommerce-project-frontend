import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useSignOut } from 'react-auth-kit'
import { useDispatch, useSelector } from 'react-redux'
import { logOut } from '../Store/redux/slices/userSlice'
function _admin() {
    const { userData } = useSelector((state) => state.userSlice)
    const signOut = useSignOut();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const LogOutFun = () => {
        dispatch(logOut({ signOut, navigate }))
    }
    return (
        <div className='text-center mt-5'>
            <h2>
                Welcome to your Admin page
            </h2>
            <h4>Hi {userData.userName}</h4>
            <button onClick={() => { LogOutFun() }}>LogOut</button>

        </div>
    )
}


export default _admin
