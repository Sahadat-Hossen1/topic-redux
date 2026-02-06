import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from '../features/counter/counterSlice';

export default function Counter() {
  const count= useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();
  const [incrementAmount, setIncrementAmount] =useState('');
  

  return (
    <div className='flex justify-center items-center'>
      <div className='w-70 h-60 bg-blue-200'>
      <div>
        <button className='bg-green-500 text-white p-2 rounded m-2' 
      onClick={()=>dispatch(increment())}>
        increment +
      </button>

      <span className='text-2xl font-bold'>{count} </span>

      <button className='bg-red-500 text-white p-2 rounded m-2' 
      onClick={()=>count <=0 ?alert('Decrement action not allowed'):dispatch({type:"counter/decrement"})}>
        decrement -
      </button>
      </div>
      {/* increment by ammount */}
      <div>
        <input type="number"
        value={incrementAmount}
        onChange={(e)=>setIncrementAmount(Number(e.target.value))}
        min={0}
        max={50}
        className='border border-gray-900 p-2 m-2 rounded'
         />
        <button className='bg-yellow-500 text-white p-2 rounded m-2' onClick={()=>dispatch(incrementByAmount(incrementAmount ||0))}>
        Add ammount
        </button>
      </div>

    </div>
    </div>
  )
}
