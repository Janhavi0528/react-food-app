
import { app_icon } from "../constants";
import search_icon from '../images/search.png';
import offers from '../images/offers.png';
import help from '../images/help.png';
import user from '../images/user.png'
import cart from '../images/cart.png'
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate();

        return (
           <div className="container flex flex-col px-20 py-3 shadow-md shadow-slate-300" >
                      
                <div className="flex flex-row justify-between">
                        <div className="ml-20">

                        <img onClick={()=> navigate('/')}
                        className="h-10 w-30 mt-1 pb-1"
                        src={app_icon}/>
                        </div>
                        
                        <div className="flex flex-row mt-3">
                                <span className="flex mr-3 text-xl font-semibold text-black-200
                                flex-row cursor-pointer hover:text-orange-600"
                                onClick={()=> handleSearch()}>
                                
                                <img className="h-5 mt-1 mr-1 "
                                        src={search_icon}/>
                                        Search</span>

                                <span className="flex mr-3 ml-2 text-xl font-semibold text-black-200
                                flex-row cursor-pointer hover:text-orange-600" 
                                onClick={()=> navigate('/offer')}>
                                <img className="h-5 mt-1 mr-1"
                                        src={offers}/>
                                        Offers</span>

                                <span className="flex mr-3 ml-2 text-xl font-semibold text-black-200
                                flex-row cursor-pointer hover:text-orange-600"
                                 onClick={()=> navigate('/help')}>
                                <img className="h-5 mt-1 mr-1"
                                        src={help}/>
                                        Help</span>

                                <span className="flex mr-3 ml-2 text-xl font-semibold text-black-200 flex-row cursor-pointer hover:text-orange-600"
                                onClick={()=>navigate('/Signup')}>
                                <img className="h-5 mt-1 mr-1"
                                        src={user}/>
                                        Sign In</span>


                        
                                <span className="flex mr-2 ml-2 text-xl font-semibold text-black-200 flex-row cursor-pointer hover:text-orange-600"
                                onClick={()=> 
                                    {
                                        navigate('/cart'),
                                        console.log("habkjasb")
                                    
                                    }}
                                >

                                <img className="h-5 mt-1 mr-1"
                                        src={cart}/>
                                        Cart

                                </span>        

                        </div>  
                        
                          
                </div> 
            
               


           </div>
        )
}
export default Header;