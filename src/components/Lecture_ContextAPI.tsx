import React, { createContext, Dispatch, useContext, useReducer } from "react";

type StateType = {
    number:number;
    text:string;
}

type DispatchType = 
    {type:"setNum";number:number}
|   {type:"setText";text:string}

const StateContext = createContext<StateType | null>(null);
const DispatchContext = createContext<Dispatch<DispatchType> | null>(null);
// React에서 내장하고 있는 Dispatch타입을 불러오고 이 Dispatch타입의 제너릭으로 타입을 어노테이션 해주면됨.
// 타입의 null값을 지정 하고 있는데 이는 초기값을 null로 주기 위함임. 대체적으로 이렇게 사용한다고함.

const reducer = (state:StateType,action:DispatchType)=>{
    switch(action.type){
        case "setNum":{
            return{
                ...state,
                number:action.number
            }
        }
        case "setText":{
            return{
                ...state,
                text:action.text
            }
        }
        default:{
            throw new Error("unhandled action");
        }
    }
}

type ComponentProps = {
    children: React.ReactNode;
}
// contextApi를 사용하기 위해서는 최상위 부모 componenet에서 상태를 관리하고 아래의 component에서 이 상태를 참조 하기 위해
// children props를 통해 하위 컴포터는를 읽어드림.

export function SampleProvider({children}:ComponentProps){
    const [state,dispatch] = useReducer(reducer,{
        number:100,
        text:"Hello"
    })

    return(
        <StateContext.Provider value={state}>
            <DispatchContext.Provider value={dispatch}>
                {children}
            </DispatchContext.Provider>
        </StateContext.Provider>
    )
}

export function useStateContext(){
    const state = useContext(StateContext);
    if(!state){throw new Error("noneState")}
    // 여기서 if를 통해 state값을 해결 안해준다면, return 값이 null 또는 state임으로 오류가 발생함.
    return state;
}

export function useDispatchContext(){
    const dispatch = useContext(DispatchContext);
    if(!dispatch){throw new Error("noneAction")}
    return dispatch;
}