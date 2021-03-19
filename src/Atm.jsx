import { useEffect, useState } from "react";
import Bank from './Bank'

function Atm() {

    const [total, setTotal] = useState(0)
    const [currency, setCurrency] = useState(false)


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
        console.log(total);
    }

    const handleChange = () => {
        if (currency) {
            console.log('if', currency)
            setTotal(total * 10.15);
            setCurrency(!currency)

        } else {
            console.log('else', currency)
            setCurrency(!currency)
            setTotal(total / 10.15)

        }


    }

    const deposit = (value) => {
        setTotal(0)
    }

    return (
        <div>
            <Bank total={total}/> 
        <div className='calculator'>
            <div type='text' className='calculator-screen' value={total} disabled>{total.toFixed(1)} </div>

            <div className='calculator-keys'>
                <button type="button" class="operator" value="100" onClick={addToTotal}>100</button>
                <button type="button" class="operator" value="500" onClick={addToTotal}>500</button>
                <button type="button" class="operator" value="1000" onClick={addToTotal}>1000</button>
                <button type="button" class="operator" value='sek' onClick={handleChange}>SEK/EURO</button>
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
                <button type='button' className='all-clear' value='all-clear'>
                    C
        </button>

                <button type='button' onClick={deposit} className='equal-sign' value='='>
                    Withdraw
        </button>
            </div>

        </div>
        </div>
    );
}

export default Atm
