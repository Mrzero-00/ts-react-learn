import React from 'react';
// import Counter from './components/Counter';
// import Hello from './components/Hello';
import { SampleProvider } from './components/Lecture_ContextAPI';
import Lecture_ContextAPInode from './components/Lecture_ContextAPInode';
// import Lecture_Reducer from './components/Lecture_Reducer';
// import MyForm from './components/MyForm';


function App() {

  // const onSubmit =(form:{name:string,description:string})=>{
  //   console.log(form);
  // }

  return (
      <SampleProvider>
        <Lecture_ContextAPInode/>
      </SampleProvider>
  );
}

export default App;
