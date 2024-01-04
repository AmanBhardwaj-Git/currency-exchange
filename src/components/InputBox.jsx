import React ,{ useId } from "react";
function InputBox({ 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [''],
    selectCurrency="",
    amountDisable = false,
    currencyDisable = false,
    className = "" ,
    }) {
  
const amountInputId = useId()

    return (
    <div className={`bg-white/60 p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label htmlFor={amountInputId} className="text-black/60 mb-2 inline-block font-bold">{label}</label>
        <input
          id={amountInputId}
          className="outline-none rounded-md text-zinc-200 font-bold w-full bg-zinc-500/70 px-3 py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/60 font-extrabold mb-2 w-full">Currency Type</p>
        <select className="rounded-lg px-1 py-1
         bg-black/30 font-semibold backdrop-blur-sm cursor-pointer outline-none text-zinc-800 text-lg"
         value={selectCurrency}
    onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
         disabled ={currencyDisable} >

        {currencyOptions.map((currency2)=>(
        <option value={currency2} key={currency2}>{currency2}</option>
            ))}
        
        </select>
      </div>
    </div>
  );
}

export default InputBox;
