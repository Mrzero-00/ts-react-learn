import React from 'react';
import { useDispatchContext, useStateContext } from './Lecture_ContextAPI';

function Lecture_ContextAPInode(){

    const state = useStateContext();
    const dispatch = useDispatchContext();


    const {number,text} = state;

    const increaseLogic = ()=>{dispatch({type:"setNum",number:number+1})};
    const decreaseLogic = ()=>{dispatch({type:"setNum",number:number-1})};
    const setTextLogic = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({type:"setText",text:e.target.value})
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={increaseLogic}>증가</button>
            <button onClick={decreaseLogic}>감소</button> 
            <h2>{text}</h2>
            <input onChange={setTextLogic} value={text}></input>
        </div>
    )
}

export default Lecture_ContextAPInode;