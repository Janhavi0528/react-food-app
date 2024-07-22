
import Header from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentCart from './Cart.jsx'
function Home(){

        // const [cart,setCart] = useState(false)
        // const navigate = useNavigate()

        // const handleSearch=()=>{

        // }

        // const handleOffer=()=>{

        // }

        // const handleHelp=()=>{

        // }

        // const handleSignIn=()=>{

        // }

        // const handleCart=()=>{
        //         console.log("handleCart-------------")
        //         setCart(true)
        // }

        return (
        //    <div className="flex flex-col w-full">
        //         <Header handleSearch={handleSearch}
        //                 handleHelp={handleHelp}
        //                 handleOffer={handleOffer}
        //                 handleSignIn={handleSignIn}
        //                 handleCart={handleCart}/>

        //         {cart &&  <ComponentCart/> }      
              
        //    </div>

                        <Header/>
        )
}
export default Home;