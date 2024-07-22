
import { food_img } from "../constants";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function SignUp(){
    const navigate = useNavigate();
    const [phoneNumber,setPhoneNumber] = useState()
    const [name,setName] = useState()
    const [email,setEmail]= useState()

    const handleLogin=()=>{
        if(phoneNumber.length == 10 && name.length >0 && email.length>0){
            navigate('/Login')
          }else{
            alert("Please enter valid details")
          }   
    }

    const handleContinue=()=>{
        if(phoneNumber.length == 10 && name.length>0 && email.length>0){
            navigate('/')
          }else{
            alert("Please enter valid details")
          }  
    }

    return (
        <div className="container flex flex-col">
            <div className="main-container flex flex-row justify-around">

                <div className="left flex flex-col mt-10">

                    <span className="font-semibold text-2xl">Sign up</span>
                    <span className="mt-2"> or 
                        <span onClick={()=> handleLogin()}
                            className="font-semibold text-orange-500 p-2 cursor-pointer">
                            login to your account
                        </span>
                    </span>

                    <hr className="bg-black h-1 w-9 mt-7"/>

                </div>
                <div className="right h-40 w-40">
                    <img
                        alt=""
                        src={food_img}
                    />

                </div>

            </div>

            <div className="btn-container flex justify-center flex-col items-center mt-12">

                <div className="flex flex-col border-gray-400 border-2 p-2 w-2/6">
                    <label className="text-gray-500 font-semibold">Phone number</label>
                    
                    <input type="text"
                        className="outline-0 font-semibold text-lg"
                        value={phoneNumber}
                        onChange={(e)=> setPhoneNumber(e.target.value)} />

                </div>

                <div className="flex flex-col border-gray-400 border-2 p-2 w-2/6 mt-2">
                    <label className="text-gray-500 font-semibold">Name</label>
                    
                    <input type="text"
                        className="outline-0 font-semibold text-lg" 
                        value={name}
                        onChange={(e)=> setName(e.target.value)}
                       />

                </div>

                <div className="flex flex-col border-gray-400 border-2 p-2 w-2/6 mt-2">
                    <label className="text-gray-500 font-semibold">Email</label>
                    
                    <input type="text"
                        className="outline-0 font-semibold text-lg" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}/>

                </div>  

                <button onClick={()=> handleContinue()}
                    className="mt-3 bg-orange-500 text-white font-semibold text-lg w-2/6 h-14">
                CONTINUE
                </button>
            </div>
        </div>
    )
}

export default SignUp;