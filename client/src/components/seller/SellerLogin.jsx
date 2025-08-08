import React, { useEffect, useState } from 'react'
import { useAppContext } from '../../context/appContext';

const SellerLogin = () => {

    const {isSeller, setIsSeller, navigate} = useAppContext();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        setIsSeller(true);
    }

    useEffect(()=>{
        if(isSeller){
            navigate("/seller");
        }
    },[isSeller])


  return !isSeller && (
    <form action="" onSubmit={onSubmitHandler} className='min-h-screen flex items-center text-sm text-gray-600'>
        <div className='flex flex-col gap-5 m-auto items-start p-8 py-12 w-80 sm:w-[352px] rounded-lg shadow-xl border border-gray-200'>
            <p className="text-2xl font-medium m-auto">
                <span className="text-primary">Seller</span><span>Login</span>
            </p>

            <div className="w-full">
                <p>Email</p>
                <input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="enter your email" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="text" required />
            </div>

            <div className="w-full ">
                <p>Password</p>
                <input onChange={(e)=> setPassword(e.target.value)} value={password} placeholder="enter your password" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="password" required />
            </div>

            <button className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer">
                Login
            </button>


        </div>
    </form>
  )
}

export default SellerLogin
