import React, { useEffect, useState } from 'react';
import { Button, Input, Paper } from '@mui/material';

export default function Employee(props) {

    const[employees, setEmployees] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
  const handleFileInput = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    console.log(selectedFile);
    const formData = new FormData();
    formData.append('file', selectedFile);
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

  useEffect(() => {
    fetch("http://localhost:8080/employee/getAll")
      .then(res => res.json())
      .then(result => {
        setEmployees(result);
      })
      .catch(error => console.error(error));
  }, []);
  
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
      <h1>Employees</h1>
      <Paper elevation={3} style={paperStyle}>
        {employees.map(employee=>(
            <Paper elevation={6} style={{margin:"10px", padding: "15px", textAlign:"left"}} key={employee.id}>
                Name:{employee.name}
                Email:{employee.email}
                Phone:{employee.phone}
            </Paper>
        ))   } 
            </Paper>
    </div>
  );
}
