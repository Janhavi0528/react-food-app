
import { home_url } from "../constants";
import useFetchData from '../utils/useFetchData';
import ItemHorizental from "./ItemHorizental";
import { useState,useEffect } from "react";
import TopRestaurant from "./TopRestaurant";
const Body =()=>{

    const [response,setResponse] = useState([])
    const [itemHorizontel,setItemHorizontel]= useState([])

    const [toRestaurant ,setTopRestaurant] = useState([])

    useEffect(()=>{
        getRespone();
    },[])


    const getRespone =async()=>{
        let response = await fetch(home_url);
        const result = await response.json()
        console.log(result)
        setResponse(result.data?.cards[0]?.card?.card)
        setItemHorizontel(result.data?.cards[0]?.card?.card?.imageGridCards?.info)

        setTopRestaurant(result.data?.cards[1]?.card?.card)
    }


    return  (
        <div>
                <ItemHorizental
                    title={response?.header?.title}
                    data={itemHorizontel}/>

                <TopRestaurant/>    
        </div>
    )
}
export default Body;