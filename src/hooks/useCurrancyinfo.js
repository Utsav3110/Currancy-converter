import { useState , useEffect } from "react";






function useCurrencyinfo(currency){

    const [data , setData ] = useState({})
 
    useEffect(()=>{

        fetch(`${process.env.VITE_API_LINK}${currency}`)
        .then((res)=>res.json())
        .then((res) => setData(res.conversion_rates))
    }, [currency])

        return data

}


export default useCurrencyinfo;

