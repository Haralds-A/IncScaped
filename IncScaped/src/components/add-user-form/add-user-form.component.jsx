import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import axiosClient from '../../axios';
import Button from '../button/button.component';
import ErrorMessage from '../error-message/error-message.component';

const defaultFormFields = {
    username:'',
    email:'',
    password:'',
}

export default function AddUserForm({getAllUsers}) {
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {username,email,password} = formFields;
    const [errorMessage, setErrorMessage]=useState("")
       
    const handleSubmit = async (event) =>{
        event.preventDefault()
        setErrorMessage("");
        axiosClient.post('/users', userInfo)
        .then(({data})=>{
        })
        .catch(({response})=>{
            console.log(response);
            setErrorMessage(response.data.message);
        });
        setFormFields(defaultFormFields);
        getAllUsers();
    }

    const handleChanges = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})        
    }
    const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); 
  };

  const real_role= isChecked ? "1" : "0";
  const userInfo = {
    ...formFields,
    role: real_role
}

  return (
    <div className='sign-up-container'>
        <h2>Izveidot jaunu profilu</h2>
        <form onSubmit={handleSubmit}>
            <FormInput label="Lietotāj vārds" type="text" required onChange={handleChanges} name="username" value={username}/>
            <FormInput label="E-pasts" type="email" required onChange={handleChanges} name="email" value={email}/>
            <FormInput label="parole" type="password" required onChange={handleChanges} name="password" value={password}/>
            <input 
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
        />
            <label htmlFor="checkbox">Admin</label>
            <p></p>
            
            <Button type='submit'>Izveidot profilu</Button>
            
        </form>
        {errorMessage&&<ErrorMessage message={errorMessage}/>}
    </div>
  )
}
