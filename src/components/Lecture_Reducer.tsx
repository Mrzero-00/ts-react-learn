import React, {useReducer} from 'react';

type ReducerType = 
    {type:"setNum";num:number} 
  | {type: "setText";text:string}
  | {type:"setColor";color:Color} 
  | {type:"setToggle"};
type Color = "red" | "blue" | "yellow";
type ReduceState = {
    num:number;
    text:string;
    color:Color;
    toggle:boolean;
}

const reducer =(state:ReduceState,type:ReducerType):ReduceState=>{

    switch(type.type){
        case "setNum":
            return {
                ...state,
                num : type.num
            };
        case "setText":
            return {
                ...state,
                text : type.text
            };
        case "setColor":
            return {
                ...state,
                color : type.color
            };
        case "setToggle":
            return {
                ...state,
                toggle : !state.toggle
            };
        default:
            throw new Error("unhandled Type");
    }

}

function Lecture_Reducer(){
    const [state, dispatch] = useReducer(reducer,{
        num:0,
        text:"Hello",
        color:"blue",
        toggle:true,
    });

    const {num,text,color,toggle} = state;

    const increaseLogic = ()=>{dispatch({type:"setNum",num:num+1})};
    const decreaseLogic = ()=>{dispatch({type:"setNum",num:num-1})};
    const setTextLogic = (e:React.ChangeEvent<HTMLInputElement>)=>{
        dispatch({type:"setText",text:e.target.value})
    }
    const setTogglLogic = ()=>{dispatch({type:"setToggle"})}

    return(
        <div>
            <h1>{num}</h1>
            <button onClick={increaseLogic}>증가</button>
            <button onClick={decreaseLogic}>감소</button> 
            <h2>{text}</h2>
            <input onChange={setTextLogic} value={text}></input>
            <h3>{toggle?"true":"false"}</h3>
            <button onClick={setTogglLogic}>토글</button>
        </div>
    )
}

export default Lecture_Reducer;