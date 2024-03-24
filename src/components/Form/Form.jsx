import React from 'react'
import { useState } from 'react';

function Form() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    console.log(selectedFile);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fileInput">Choose a file:</label>
        <input type="file" id="fileInput" onChange={handleFileChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form
