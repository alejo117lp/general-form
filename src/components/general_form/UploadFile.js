  import React, { useState } from "react";
  import { convertToBase64 } from "../functions/fileUtils";
  import '../../App.css';
  import '../../stylesheets/UploadFile.css';
  

  function UploadFile ( props ){

    const handleFileChange = async (event) => {
      const file = event.target.files[0];
      if (!file) return;
  
      try {
        const base64Data = await convertToBase64(file);
        const newFileName = `${props.userId}_${props.devNameFile}.pdf`;
  
        // Llamar al callback con los datos del archivo
        props.onFileChange({
          name: newFileName,
          base64Data: base64Data
        });
      } catch (error) {
        console.error('Error al convertir el archivo a base64', error);
      }
    };
  
    return (
      <div className="input-file-box">
        <label className="label-file">
          <span className="file-title">{props.requiredFile + ":"}</span>
          {" "+props.descriptionFile}
        </label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          name={props.fileName}
        />
      </div>
    );
  }

  export default UploadFile;