
import React from 'react'

function InputBox({
  label,
  amout,
  onAmoutChange,
  onCurrencyChange,
  currancyOptions = [],
  selectCurrancy = "USD",
  amoutDisable = false,
  currancyDisable = false,
  className = "",
}) {
 

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label  className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input  
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  placeholder="Amount"
                  disabled = {amoutDisable}
                  value={amout}
                  onChange={(e)=> onAmoutChange && onAmoutChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrancy}
                  onChange={(e)=> onAmoutChange && onCurrencyChange(Number(e.target.value)) }
                  disabled= {currancyDisable}
              >
                      
                          {currancyOptions.map((currancy)=>(

                              <option key={currancy} value = {currancy}>
                                    {currancy}
                                </option>

                          ))}
                      
              
              </select>
          </div>
      </div>
  );
}

export default InputBox;