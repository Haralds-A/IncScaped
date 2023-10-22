import React from 'react'
import "./write-page.styles.scss"
import Button from '../../components/button/button.component';
export default function WritePageComponent() {
  const handleTitleChange = (e) => {
    // setTitle(e.target.value);
  };

  const handleStoryTextChange = (e) => {
    // setStoryText(e.target.value);
  };

  const handleStorySubmit = (e) => {
    e.preventDefault();   
  };
  return (
    <div className="write-page-container">
      <h1>Write Your Story</h1>
      <div className="form-container">      
        <form onSubmit={handleStorySubmit}>
          <label htmlFor="title">Title:</label>
          <input
            className='write-title'
            type="text"
            id="title"
            // value={""}
            onChange={handleTitleChange}
            required
          />
          <textarea
            className='storyText'
            id="storyText"
            // value={""}
            onChange={handleStoryTextChange}
            required
          />
          <Button type='submit'>Submit Story</Button>
        </form>
      </div>
    </div>
  )
}
