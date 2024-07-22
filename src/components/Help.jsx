
import down from '../images/down.png'
import { useState } from 'react'
import useFetchData from '../utils/useFetchData'
import { help_url, faq_url } from '../constants'

const Help =()=>{

    const [show, setShow] = useState(false);
    const [ showIndex,setShowIndex ] =useState(0);

    const [ showLegeal ,setShowLegeal ] = useState(true);
    const [ showFAQ, setShowFAQ] = useState(false);

    const response_help = useFetchData(help_url);
    const response_faq  =  useFetchData(faq_url);

    console.log(response_faq)

    const handleTerms=(index)=>{
        setShowIndex(index)
        if(showIndex === index){
            setShow( !show )
        }
    }

    return (
        <div className="flex flex-col pb-96"
            style={{backgroundColor: '#37718E'}}>

                <div className="flex flex-col mx-10 my-10">

                    <span className="text-3xl text-white font-bold">
                        Help & Support
                    </span>
                    <span className="text-white mt-1">
                    Let's take a step ahead and help you better.

                    </span>

                </div>

                <div className="cart flex mx-10 my-5 w-3/3 border-1
                 shadow-sm shadow-black pb-20" 
                    style={{backgroundColor: 'white'}}>

                    <div className='flex my-4 mx-4 flex-col w-full'>
                        <div className='flex flex-row p-2'>
                             <h1 className="text-xl font-bold text-gray-500 mx-2 bg-slate-300 p-2 rounded-md px-3 cursor-pointer hover:bg-slate-500 hover:text-white"
                                onClick={()=> {
                                    setShowFAQ(false),
                                    setShowLegeal(true)
                                }}>Legal</h1>

                            <h1 className="text-xl font-bold text-gray-500 mx-2 bg-slate-300
                            p-2  rounded-md px-3 cursor-pointer hover:bg-slate-500 hover:text-white"
                            onClick={()=>{
                                setShowFAQ(true),
                                setShowLegeal(false)
                            }}>FAQ</h1>

                        </div>
                       

                        {showLegeal && response_help.map((item,index)=>(
                            <div key={item.id}
                            className='terms cursor-pointer mt-3 mx-10 w-3/3 ' 
                            onClick={()=> {handleTerms(index)}}>
                                <div className='terms flex flex-row items-end 
                                justify-between cursor-pointer mt-3 mx-10 w-3/3 '>
                                    <span className='text-base flex text-gray-400 
                                    font-semibold hover:text-orange-400'>
                                        {item.title}
                                    </span>


                                    <img className='h-5 w-5'
                                    src={down}/>

                                    </div>

                                <hr className='border-1 mt-2 mx-10 w-3/3'/>

                            {showIndex === index && show &&
                                <div className='mt-2 mx-10 w-3/3'>
                                    <span className='text-sm mx-2 my-2 text-gray-500'>
                                            {item.description}
                                    </span>
                                </div>   
                                }
                            </div> 


                        ))}


                        {
                            showFAQ &&
                            <div>
                                <h1>FAQ Tab</h1>
                                </div>
                        }

                    </div>




                </div>

              

        </div>        
    )
}
export default Help;