import axios from 'axios'; 
import React,{Component} from 'react';
import './Main.css';

import { Button, Input, AppBar, Toolbar, Grid, Typography } from '@material-ui/core'
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import FileSelectIcon from '@material-ui/icons/Folder';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

class Main extends Component { 
  
    state = { 
  
      // Initially, no file is selected 
      selectedFile: null
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => { 
     
      // Update the state 
      this.setState({ selectedFile: event.target.files[0] }); 
     
    }; 
     
    // On file upload (click the upload button) 
    onFileUpload = () => { 
     
      // Create an object of formData 
      const formData = new FormData(); 
     
      // Update the formData object 
      if(this.state.selectedFile) {
        formData.append( 
          "myFile", 
          this.state.selectedFile, 
          this.state.selectedFile.name 
        ); 
      }
      else {
        alert('No File selected! Please choose your file.');
      } 
     
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
     
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 
    }; 
     
    // File content to be displayed after 
    // file upload is complete 
    fileData = () => { 
     
      if (this.state.selectedFile) { 
          
        return ( 
          <div id="text-info"> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div id="text-no-info"> 
            <br /> 
            <h4 id="heading-4">Select a file before uploading!</h4> 
          </div> 
        ); 
      } 
    }; 
     
    render() { 
     
      return ( 
        <div>
                <AppBar position="static" alignitems="center" color="primary">
                    <Toolbar>
                        <Grid container justify="center" wrap="wrap">
                        <Grid item>
                        <Typography variant="h6">POPI DataClass - Neil Foxcroft</Typography>
                        </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

            <h1 id="heading-1"> 
              Neil Foxcroft - POPI DataCapture 
            </h1> 
            <h3 id="heading-3"> 
              File Upload using to identify and caputure sensitive personal data. 
            </h3>

            <div id="input-area">
              <div>
                  <Input
                    id="input-btn"
                    endAdornment={<FileSelectIcon/>}
                    type="file" 
                    onChange={this.onFileChange} /> 
                  <Button 
                    id="upload-button"
                    onClick={this.onFileUpload}
                    variant="contained"
                    color="default"
                    startIcon={<CloudUploadIcon/>} > 
                    Upload! 
                  </Button>
              </div>
            </div> 
          {this.fileData()} 
        </div> 
      ); 
    } 
  }

  export default Main;