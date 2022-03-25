import React, {FormEvent, useState} from 'react';

type MyFormType ={
    onSubmit:(form:{name:string;description:string;})=>void;
}

function MyForm({ onSubmit }:MyFormType){

    const [formData,setFormData] = useState({
        name:"",
        description:""
    })

    const {name,description} =formData;

    const onChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit =(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        onSubmit(formData);
        setFormData({
            name:"",
            description:""
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <input name="name" onChange={onChange} value={name}/>
            <input name="description" onChange={onChange} value={description}/>
            <input type="submit"/>
        </form>
    )

}


export default MyForm;