import React, {useState} from 'react';

function Counter(){

    const [number,setNumber] = useState<number>(0); 
    // useState로 상태 관리를 할때 제너릭을 이용하여 타입을 어노테이션 해도 되지만,
    // 만약 제너릭을 사용하지 않는다면, 초기화된 값으로 타입이 유추되어 사용된다.

    return(
        <div>
            <div>{number}</div>
            <div>
                <button onClick={()=>{setNumber(number+1)}}>+</button>
                <button onClick={()=>{setNumber(number-1)}}>-</button>
            </div>
        </div>
    )
}

export default Counter;