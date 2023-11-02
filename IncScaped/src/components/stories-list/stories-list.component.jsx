import React from 'react'
import StorieComponent from '../storie/storie.component'
import { useContext } from 'react'
import { StorieContext } from '../../context/storie.context'
import './stories-list.styles.scss'
import { useEffect } from 'react'
import axiosClient from '../../axios'
import Button from '../button/button.component'


export default function StoriesListComponent() {  
  
  const {stories, setStorie} = useContext(StorieContext);
  const fetchData = async () => {
    axiosClient.get('/storyAll')
    .then(({data})=>{
      setStorie(data.data)
    })
    .catch((error)=>{
        console.log(error);
    }); 
};
  useEffect(() => {
    
    fetchData();
  }, []);
  
   const handleCombinedClick = (event, storie) => {
    handleButtonClick(event);
    handleDeleteStory(storie);
  };
  const handleButtonClick = (event) => {
    event.preventDefault(); 
  };
  
  const handleDeleteStory = (storie) => {
    axiosClient.delete(`/story/${storie.id}`)
    .then(({data})=>{
      console.log(data);
      fetchData();
    })
    .catch((error)=>{
        console.log(error);
    }); 
  }; 

  return (
    <div className='stories-container'>

        {/* TODO filtrācija */}

        {stories.map((storie, index) => (
 
          <StorieComponent key={index} buttons={<Button type="submit" onClick={(event) => handleCombinedClick(event, storie)} >Delete</Button>} storie={storie}/> 

        ))}
       
    </div>
  )
}
