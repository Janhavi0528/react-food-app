
import { useState,useEffect } from "react";

function useFetchData(url){

    const [response,setResponse]= useState([])

    useEffect(()=>{
       let flag = true;
        flag && getData()

        return (()=> flag= false)

    },[])


    const getData=async()=>{
        let response = await fetch(url);
        const result = await response.json()
        
        setResponse(result.data?.issues?.data)
    }

    return response;
}

export default useFetchData;