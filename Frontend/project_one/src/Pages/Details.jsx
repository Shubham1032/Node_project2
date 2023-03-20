import React,{createContext,useEffect,useState} from 'react'

export const store=createContext();
const Details=(props)=>{
    const [details, setDetails] =useState([{}])
useEffect(()=>{

    fetch('http://localhost:3001/')
    .then((res)=>res.json())
    // .then((res)=>console.log(res.fis))
    .then((res)=>setDetails(res.fis))
    
},[])

console.log("xsxxx"+details)
    return(

<store.Provider value={[details, setDetails]}>
{props.children}
</store.Provider>
    )
}
export default Details