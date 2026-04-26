import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, } from '../features/counter/counterSlice';

export default function Counter() {
  const count= useSelector((state)=>state.counters);
  // console.log(count);
  
  const dispatch=useDispatch();
  
const handlerIncrement=(counterId)=>{
  dispatch(increment(counterId))
}
const handleDecrement=(counterId,counterValue)=>{
   if(counterValue===0){
    alert("you already zero .please increment something ")
    return
   }
  dispatch(decrement(counterId))
   
}
  return (
    <div className='flex justify-center items-center'>
      <div className='w-70 h-60 bg-blue-200'>
      {/* <div>
        <button className='bg-green-500 text-white p-2 rounded m-2' 
      onClick={()=>dispatch(increment())}>
        increment +
      </button>

      <span className='text-2xl font-bold'>{count} </span>

      <button className='bg-red-500 text-white p-2 rounded m-2' 
      onClick={()=>count <=0 ?alert('Decrement action not allowed'):dispatch({type:"counter/decrement"})}>
        decrement -
      </button>
      </div> */}
      {
        count.map((counter)=>(
        <div key={counter.id} className='flex justify-center items-center'>
        <button className='bg-green-500 text-white p-2 rounded m-2' 
      onClick={()=>handlerIncrement(counter.id)}>
        increment +
      </button>
      <span className='text-2xl font-bold'>{counter.value} </span>

      <button className='bg-red-500 text-white p-2 rounded m-2'
      onClick={()=>handleDecrement(counter.id,counter.value)}>
        decrement -
      </button>
      </div>
        ))
      }
     

    </div>
    </div>
  )
}
