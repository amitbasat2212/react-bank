import {getBalance} from "../ApiClient/ApiClientBalance";
import React, { useState, useEffect } from 'react'
export default function Balance(){
      const [balance,setBalance]=useState(0)
      useEffect(() => {
        getBalance().then((newBalance)=>{
            setBalance(newBalance)
        })
      }, [])
      

    return(
        <div>balance : {balance}</div>
    )
}