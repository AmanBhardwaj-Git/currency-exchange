
import { useState } from "react";
import "./App.css";
import InputBox from "./components/InputBox";
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  let BackgroundImage = "https://wallpapercave.com/wp/wp2597454.png"
const [amount, setAmount] = useState('')
const [from, setFrom] = useState('usd')
const [to, setTo] = useState('inr')
const [convertedAmount, setConvertedAmount] = useState('')

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  const convert = ()=>{
    setConvertedAmount(amount*currencyInfo[to])
  }
    

  return (
    <div
      className="w-full h-screen flex flex-wrap flex-col gap-4 justify-center items-center bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <h1 className="text-5xl font-extrabold text-white/60 border-b-violet-200 border-b-8 border-double">Currency Exchange</h1>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox label="From" 
              amount={amount} 
              currencyOptions = {options}
              onCurrencyChange={(currency)=>setFrom(currency)}
              selectCurrency = {from}
              onAmountChange={(amount)=>setAmount(amount)}
              />
            </div>
            <div className="relative w-full h-0.5">
            <i type="button"
             className="absolute left-1/4 -translate-y-1/2 text-4xl text-blue-600 ri-swap-fill active:scale-150 active:text-green-700 active:rotate-180 transition-all active:duration-100 ease-linear hover:cursor-pointer"
             onClick={swap}></i>
              
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox label="To" 
               amount={convertedAmount} 
               currencyOptions = {options}
               onCurrencyChange={(currency)=> setTo(currency)}
               selectCurrency = {to}
               amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600/50 text-white/60 active:bg-blue-500/70 active:text-white text-2xl px-2 py-2 font-bold rounded-lg"
            >
              Convert ({ from } to {to})
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default App;
