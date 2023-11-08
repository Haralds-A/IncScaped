import React from 'react'
import { useState } from 'react'
import FormInput from '../form-input/form-input.component';
import "./sign-up-form.styles.scss"
import Button from '../button/button.component';
import axiosClient from '../../axios';
import { useContext } from 'react';
import { UserContext } from '../../context/user.context';
import ErrorMessage from '../error-message/error-message.component';
const defaultFormFields = {
    username:'',
    email:'',
    password:'',
    pasword_confirmation:''
}


export default function SignUpForm() {
    const [formFields,setFormFields]=useState(defaultFormFields);
    const {username,email,password,pasword_confirmation} = formFields;
    const {setUserToken,setCurrentUser} = useContext(UserContext);
    const userInfo = {
        ...formFields,
        role: "0"
    };
    const [errorMessage, setErrorMessage]=useState("")
    const handleSubmit = async (event) =>{
        event.preventDefault();
        setErrorMessage("");
        if(password !== pasword_confirmation){
            alert("passwords do not match");
            return;
        }
        axiosClient.post('/signup', userInfo)
        .then(({data})=>{
            setCurrentUser(data.user);
            setUserToken(data.token);
        })
        .catch(({response})=>{
            console.log(response.data.message);
            setErrorMessage(response.data.message);
        });  
        
    }
    const handleChanges = (event) =>{
        const {name,value} = event.target;
        setFormFields({...formFields,[name]:value})        
    }
  return (
    <div className='sign-up-container'>
        <h2>Neesat vel pierakstijušies?</h2>
        <span>Pierakstieties ar E-pastu un paroli</span>
        <form onSubmit={handleSubmit}>
            <FormInput label="Lietotāj vārds" type="text" required onChange={handleChanges} name="username" value={username}/>
            <FormInput label="Epasts" type="email" required onChange={handleChanges} name="email" value={email}/>
            <FormInput label="Parole" type="password" required onChange={handleChanges} name="password" value={password}/>
            <FormInput label="Atkārtojiet paroli" type="password" required onChange={handleChanges} name="pasword_confirmation" value={pasword_confirmation}/>
            <Button type='submit'>Sign up</Button>
        </form>
        {errorMessage&&<ErrorMessage message={errorMessage}/>}
    </div>
  )
}