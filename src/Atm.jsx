import { useEffect, useState } from "react";
import Bank from './Bank'

function Atm() {

    const [total, setTotal] = useState(0)
    const [currency, setCurrency] = useState(false)
    const [balance, setBalance] = useState(1000)

    useEffect(() => {
        console.log('Booting up atm...')
        setTimeout(() => {
            console.log('Atm ready...');
        }, 3000);
    }, [])
  
    useEffect(() => {
      console.log("updating total");
    }, [total]);
  
    useEffect(() => {
      return () => {
        console.log("unmounting");
      };
    }, []);

    const addToTotal = (e) => {
        setTotal(total + parseInt(e.target.value))
    
    }

    const handleChange = (e) => {
        
        if (e.target.value === 'sek') {         
            setTotal(total * 10.15);
            setBalance(balance * 10.15)
            setCurrency(!currency)

        } else {            
            setCurrency(!currency)
            setTotal(total / 10.15)
            setBalance(balance / 10.15)
            
        }
        


    }

    const deposit = () => {
       setBalance(balance + total)
       setTotal(0);
       
    }
    
    const withdraw = () => {
        if(total > balance) {
            alert('balance to low, try smaller amount')
            setTotal(0)
        } else {
            setBalance(balance - total)
            setTotal(0)
        }
       
    }

    return (
        <div>
            <Bank balance={balance} handleChange={handleChange}/> 
        <div className='calculator'>
            <div type='text' className='calculator-screen' value={total} disabled>{currency ? `${total.toFixed(1)} EUR`: `${total.toFixed(1)} SEK`} </div>

            <div className='calculator-keys'>
                <button type="button" class="operator" value={currency ? '10' : '100'} onClick={addToTotal}>{currency ? '10': `100`}</button>
                <button type="button" class="operator" value={currency ? '50' : '500'} onClick={addToTotal}>{currency ? '50': `500`}</button>
                <button type="button" class="operator" value={currency ? '100' : '1000'} onClick={addToTotal}>{currency ? '100': `1000`}</button>
                <button type="button" class="operator" value={currency ? 'sek' : 'euro'} onClick={handleChange}>{currency ? 'to SEK': 'to EUR'}</button>
                <button type='button' value='7'>
                    7
        </button>
                <button type='button' value='8'>
                    8
        </button>
                <button type='button' value='9'>
                    9
        </button>

                <button type='button' value='4'>
                    4
        </button>
                <button type='button' value='5'>
                    5
        </button>
                <button type='button' value='6'>
                    6
        </button>

                <button type='button' value='1'>
                    1
        </button>
                <button type='button' value='2'>
                    2
        </button>
                <button type='button' value='3'>
                    3
        </button>

                <button type='button' value='0'>
                    0
        </button>
                <button type='button' className='decimal' value='.'>
                    .
        </button>
                <button type='button' onClick={deposit} className='all-clear' value='all-clear'>
                    Deposit
        </button>

                <button type='button' onClick={withdraw} className='equal-sign' value='='>
                    Withdraw
        </button>
            </div>

        </div>
        </div>
    );
}

export default Atm
