import React from 'react';

type HelloProps={
    name:string;
    age:number;
}

function Hello({name,age}:HelloProps){
    return(
        <div>
            hello {name}, {age}
        </div>
    )
}

Hello.defaultProps={
    name:"dkdk",
    age:33,
}

export default Hello;