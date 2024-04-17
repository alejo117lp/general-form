import React, { useState } from "react";
import TestFiles from "./TestFiles";

function TestForm (props) {
    const [fileDatas, setFileDatas] = useState({});
  
    // Función para actualizar el estado con los datos del archivo
    const handleFileChange = (key, data) => {
        props.onFileDataChange(prev => ({ ...prev, [key]: data }));
    };
  
    const handleSubmit = () => {
      // Aquí puedes enviar fileDatas a donde necesites
      console.log('Enviando archivos:', fileDatas);
      // Ejemplo de cómo podrías enviar estos datos
      // sendRequest({
      //   url: `${tuUrlDeAPI}`,
      //   method: 'POST',
      //   data: JSON.stringify(fileDatas),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
    };
  
    return (
      <div className="form-box">
        <h3>{props.nameBox}</h3>

        <TestFiles
          requiredFile= {'Cédula:'}
          descriptionFile = {'Ambas caras en la misma página, ampliada al 150%'}
          fileName = {'id_file'}
          userId = {props.userId}
          devNameFile = 'CEDULA'
          onFileChange={(data) => handleFileChange('id_file', data)}
        />
  
        <TestFiles
          requiredFile= {'Hoja de Vida:'}
          descriptionFile = {'En caso de ser nuevo para la Fundación UdeA'}
          fileName = {'curriculum_vitae'}
          userId = {props.userId}
          devNameFile = 'HOJA_DE_VIDA'
          onFileChange={(data) => handleFileChange('curriculum_vitae', data)}
        />
        <button onClick={handleSubmit}>Enviar Todo</button>
      </div>
    );
  }

  export default TestForm;