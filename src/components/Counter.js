import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { increase,decrease,reset } from '../redux/features/counter/counterSlice';



const Counter=()=>{
const count=useSelector(state=>state.counter)
const dispatch=useDispatch();
    return (
      <div>
        <h1>Counter Application</h1>
        <h2>{count}</h2>
        <button onClick={()=>dispatch(increase())} >Increase</button>
        <button onClick={()=>dispatch(decrease())} >Decrease</button>
        <button onClick={()=>dispatch(reset())} >Reset</button>
      </div>
    );
}


export default Counter;