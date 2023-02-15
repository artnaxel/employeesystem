import React, { useState } from 'react';
import { Button, Input, Paper } from '@mui/material';

export default function Employee(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(selectedFile);
    const formData = new FormData();
    formData.append('file', selectedFile.files[0]);
    fetch("http://localhost:8080/employee/upload-csv",
    {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          console.log('File uploaded successfully.');
        } else {
          console.error('File upload failed.');
        }
      }).catch(error => console.error(error));
  };

  return (
    <div  style={{ display: 'flex', flexDirection: 'column', margin: '120px 120px', textAlign: "center"}}>
        <Input
        type="file"
        id="fileInput"
        onChange={handleFileInput}
      />
      <label htmlFor="fileInput">
      </label>
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        disabled={!selectedFile}
      >
        Upload
      </Button>
    </div>
  );
}
