import { useState } from 'react'

import { InputBox } from './components'

import useCurrencyinfo from './hooks/useCurrancyinfo'



function App() {
  const [amout , setAmout] = useState(0)
  const [from , setFrom] = useState("USD")
  const [to , setTo] = useState("INR")
  const [convertedAmount , setConvertedAmount] = useState(0)


  const currancyinfo = useCurrencyinfo(from)

 const options =  Object.keys(currancyinfo)


 const swap = () =>{
  setFrom(to)
  setTo(from)
  setConvertedAmount(amout)
  setAmout(convertedAmount)
 }


 const convert = () =>{
  setConvertedAmount(amout * currancyinfo[to])
 }


 
 return (
  <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
          backgroundImage: `url('https://i.pinimg.com/564x/c0/de/a5/c0dea5ca1621be41a5d62cffcc7c05dc.jpg')`,
      }}
  >
      <div className="w-full">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form
                  onSubmit={(e) => {
                      e.preventDefault();
                      convert()
                     
                  }}
              >
                  <div className="w-full mb-1">
                      <InputBox
                           label="From"
                           amout={amout}
                           currancyOptions={options}
                           onCurrencyChange={(currancy) => setAmout(amout)}
                           selectCurrancy={from}
                           onAmoutChange={(amout) => setAmout(amout)}
                      />
                  </div>
                  <div className="relative w-full h-0.5">
                      <button
                          type="button"
                          className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                          onClick={swap}
                      >
                          swap
                      </button>
                  </div>
                  <div className="w-full mt-1 mb-4">
                      <InputBox
                          label="To"
                          amout={convertedAmount}
                          currancyOptions={options}
                          onCurrencyChange={(currancy) => setTo(currancy)}
                         selectCurrancy={from}
                         amoutDisable 
                          
                      />
                  </div>
                  <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                      Convert {from} to {to}
                  </button>
              </form>
          </div>
      </div>
  </div>
);
}

export default App
