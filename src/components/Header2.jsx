
import { app_icon } from "../constants";
import search_icon from '../images/search.png';
import offers from '../images/offers.png';
import help from '../images/help.png';
import user from '../images/user.png'
import cart from '../images/cart.png'
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Header(){

    const navigate = useNavigate()

        return (
           <div className="container flex flex-col px-20"
           style={{backgroundColor:'#d3d3d3'}}
            >
                      
                <div className="flex flex-row justify-between">
                        <div className="ml-20">

                        <img
                        className="h-10 w-30 mt-1 pb-1"
                        src={app_icon}/>
                        </div>

                        <div className="flex items-center px-10">
                            <ul className="flex ">
                                <li className="p-4 text-amber-700"><Link>Search</Link></li>
                                
                                <li className="p-4 text-amber-700"><Link to="/Offer">Offer</Link></li>


                                <li className="p-4 text-amber-700"><Link to="/Help">Help</Link></li>
                                <li className="p-4 text-amber-700"><Link to="/Login">SignIn</Link></li>

                                <li className="p-4 font-bold text-red-500">
                                    <Link to="/Cart">Cart
                                    </Link>
                                </li>
                                     
                            </ul>

                        </div>
                        
                
                        
                          
                </div> 
            
               


           </div>
        )
}
export default Header;