import React, { useState } from "react";
import { convertToBase64 } from "../functions/fileUtils";


//MUF: Multiple Upload Files
function MUFLine( props ) {

  //Manejar estados de archivos seleccionados y textos ingresados
  const [selectedFile, setSelectedFile] = useState(null);
  const [textInput, setTextInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  //Normalización de texto
  function normalizeText(input) {
    return input
      .normalize("NFD")//descompone los caracteres en sus componentes básicos. Por ejemplo, é se descompone en e y ´.
      .replace(/[\u0300-\u036f]/g, "") //Remover tildes
      .replace(/[.;,\/#!$%\^&\*;:{}=\-_`~()]/g,"") // Elimina caracteres especiales
      .replace(/ /g, '_')//Cambiar espacios por guiones bajos
      .replace(/ñ/gi, 'n') // Cambia ñ por n
      .replace(/Ñ/g, 'N');// Cambia Ñ por N

  }

  //Llama a la función normalizeText y devuelve el valor normalizado.
  const handleTextInputChange = (event) => {
    const normalizedText = normalizeText(event.target.value);
    setTextInput(normalizedText);
    setIsTyping(true);
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if(!file) return;
    setSelectedFile(file);

    try {
      const base64Data = await convertToBase64(file);
      const fileNameBase = textInput
       ? `${props.userId}_${props.devNameFile}_${textInput}`
       : `${props.userId}_${props.devNameFile}`;
       
      const newFileName = fileNameBase.toUpperCase() + '.pdf';

      props.onFileChange ({
        name: newFileName,
        base64Data: base64Data
      });

    } catch (error) {
      console.log('Error al convertir el archivo a base 64', error);
    }
  };

  return (
    <div className="sub-files-c">
      <div className="input-file-box">
        <label className="label-file-m">
          <li>{' ' + props.requiredFile }</li>
        </label>
        {props.enterpriseName == true && (
          <div className="date-cert-container">
            <label>Nombre Empresa: </label>
            <input 
              className="MUF-input"
              type="text"
              placeholder="Empresa"
              onChange={handleTextInputChange}
            />
          </div>
        )}
        {isTyping && (
          <input 
          className="MUF-input"
          type="file" 
          accept=".pdf" 
          onChange={handleFileChange}
          //name={props.fileName}
          />
        )

        }
      </div>
    </div>
  );
}

export default MUFLine;
