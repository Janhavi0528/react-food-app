import { empty_image } from "../constants";
import { useNavigate } from "react-router-dom";
const Cart=()=>{

    const navigate = useNavigate()

    return (
        <div className="flex justify-center items-center flex-col">

            <img  className="h-60 w-64"
                    src={empty_image}/>

            <span className="font-bold text-xl">Your cart is empty
            </span>      

            <span className="text-lg mt-2">
            You can go to home page to view more restaurants
            </span>


            <button onClick={()=> navigate('/')}
            className="mt-3 bg-orange-500 text-white font-semibold text-lg w-2/6 h-14 hover:bg-orange-400">
            SEE RESTAURANT NEAR YOU
            </button>

        </div>
    )

}

export default Cart;