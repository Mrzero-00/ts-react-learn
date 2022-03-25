import React from 'react';
import Counter from './components/Counter';
import Hello from './components/Hello';
import MyForm from './components/MyForm';


function App() {

  const onSubmit =(form:{name:string,description:string})=>{
    console.log(form);
  }

  return (
    <div>
     <Hello name="react"></Hello>
     <Counter></Counter>
     <MyForm onSubmit={onSubmit}></MyForm>
    </div>
  );
}

export default App;
