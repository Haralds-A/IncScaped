import React, { useEffect } from 'react'
import { useState} from 'react'
import FormInput from '../form-input/form-input.component';
import "./sign-in-form.styles.scss"
import Button from '../button/button.component';
import { UserContext } from '../../context/user.context';
import { useContext } from 'react';
import axiosClient from '../../axios';
import ErrorMessage from '../error-message/error-message.component';
const defaultFormFields = {
    email:'',
    password:'',
}

export default function SignInForm() {
    const {setUserToken,setCurrentUser} = useContext(UserContext);
    const [formFields,setFormFields]=useState(defaultFormFields);
    const [errorMessage, setErrorMessage]=useState("")
    const {email,password} = formFields;

    
    const handleSubmit = async (event) =>{
        event.preventDefault(); 
        setErrorMessage("");
        axiosClient.post('/login', formFields)
        .then(({data})=>{
            setUserToken(data.token);
            setCurrentUser(data.user);
           
        })
        .catch(({response})=>{
            console.log(response.data.error);
            setErrorMessage(response.data.error);
        });        
    }
    const handleChanges = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})        
    }
  return (
    <div className='sign-up-container'> 
        <h2>Esat jau pierakstijušies?</h2>
        <span>Ieraksties ar e-pastu un paroli</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Epasts" type="email" required onChange={handleChanges} name="email" value={email}/>
            <FormInput label="Parole" type="password" required onChange={handleChanges} name="password" value={password}/>
            <div className='buttons-container'>
                <Button type='submit'>Ierakstīties</Button>
            </div>            
        </form>   
        {errorMessage&&<ErrorMessage message={errorMessage}/>}
    </div>
  )
}
