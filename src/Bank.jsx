import React, { useEffect, useState } from 'react'

const Bank = ({balance}) => {

    
    return (
        <div>
            <h1>BankAccount: {balance.toFixed(1)}</h1>
        </div>
    )
}

export default Bank










/* const  withdrawMoney = ({total}) => {(

    
    
    if(total >= balance) {
        alert('No money')
    } else{
        balance = balance - total
    }

} */