
import { IMG_LINK } from "../constants";
import { useRef } from "react";

function ItemHorizental({title,data}){

    const scrollRef = useRef(null)

    const handleClick=(link)=>{

        window.open(link,'_blank')
    }

        return (
            <div className="container flex flex-col pl-28 pr-28 mt-2">

                <span className="font-bold text-xl">{title}</span>

                <div className="flex flex-row overflow-x-auto no-scrollbar">
                        {data.map((item,index)=>(
                           
                                <img key={item.id}
                                    className="flex aspect-auto 
                                cursor-pointer m-2 rounded-full h-24 w-24"

                                src={IMG_LINK + item.imageId}
                                    onClick={()=> handleClick(item.action.link)}/>
                        ))}


                </div>
                <hr className="mt-2 border-1 bg-slate-400"/>

            </div>
        )
}

export default ItemHorizental;