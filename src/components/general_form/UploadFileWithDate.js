import React, { useState } from "react";
import { convertToBase64 } from "../functions/fileUtils";
import DateTime from "react-datetime";
import '../../App.css';
import '../../stylesheets/UploadFile.css';

function UploadFileWithDate ( props ){

  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [unselectedDate, setUnselectedDate] = useState(true)


  const handleDateChange = (date) => {
    const formattedDate = date.format('YYYY-MM-DD');
    setSelectedDate(formattedDate);
    setUnselectedDate(false);
  }

  const handleFileChange = async(event) => {
    let file = event.target.files[0];
    setSelectedFile(file);

    try{

      //Convertir a Base64
      const base64Data = await convertToBase64(file);
      //console.log(base64Data);
    
      //Creo un nuevo objeto file con el nuevo nombre
      const fileNameBase = selectedDate 
        ? `${props.userId}_${props.devNameFile}_${selectedDate}` 
        : `${props.userId}_${props.devNameFile}`;

      const newFileName = fileNameBase.toUpperCase()+ '.pdf';

      // Paso 3: Preparar los datos para enviar al componente padre
      const fileData = {
        name: newFileName,
        base64: base64Data
      };

      console.log(fileData);

      // Llama a la función callback definida en el componente padre
      if (props.onFileChange) {
        props.onFileChange(fileData);
      }

    } catch (error){
      console.error('Error al convertir el archivo a base64', error);
    }
  };


return (
  <div className="input-file-box">
    <div>
      <label className="label-file">
        <span className="file-title">{props.requiredFile}</span>  
        {' ' + props.descriptionFile } 
    </label>
    </div>
    <div className="doc-and-date-container">
      <div className="date-cert-container">
        <label htmlFor={props.dateName}>{props.labelDateText}</label>
        <DateTime 
          id={props.fileDate}
          inputProps={{placeholder:'aaaa/mm/dd', name: props.dateName}}
          dateFormat='YYYY/MM/DD'
          timeFormat={false}
          onChange={handleDateChange}
        />
      </div>
      {!unselectedDate && (
         <input 
         type="file" 
         accept=".pdf" 
         onChange={handleFileChange} 
         //name= {props.fileName}
       />
      )}
      
    </div>
  </div>
  );
}

export default UploadFileWithDate;