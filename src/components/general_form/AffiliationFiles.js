import React, { useState } from "react";
import MUFLine from "./MUFLine";

function AffiliationFiles(props) {
  
  const comfUrl = "https://www.comfama.com/empresas/formatos-y-formularios/";

  // Estados para cada tipo de documento, usando un objeto para identificar cada tipo por clave.
  // Cada clave mantiene una lista de documentos cargados.
  const [mufLines, setMufLines] = useState({
    'birth_certificate_child': [],
    'child_id': [],
    'studies_certification': []
  });
  
  // Manejador para los cambios de archivos, añade el archivo cargado al estado en el componente padre.
  const handleFileChange = (key, data) => {
    props.onFileDataChange(prev => ({
      ...prev,
      [key]: [...(prev[key] || []), data]  // Añade el nuevo archivo a la lista existente para 'key'
    }));
  };

  // Función para agregar nuevas líneas de documentos, manteniendo un máximo de 3
  const handleAddLine = (documentType) => {
    if ((mufLines[documentType] || []).length < 3) {
      // Copia el estado actual y añade un nuevo índice al array correspondiente
      setMufLines(prev => ({
        ...prev,
        [documentType]: [...(prev[documentType] || []), { index: (prev[documentType] || []).length + 1 }]
      }));
    } else {
      alert(`No puedes agregar más de 3 líneas para el tipo de documento: ${documentType}`);
    }
  };

  return (
    <div className="form-box">
      <p className="file-title general-padding">
        Anexar la <a href={comfUrl} target="_blank" rel="noopener noreferrer">Declaración Juramentada de Comfama</a> y la siguiente documentación:
      </p>
      <div className="input-file-box-m">
        <div className="sub-files-t">
          <p>
            <span className="file-title">
              {'Documentación para la afilición de hijos'}:
            </span>
            {'  '}
          </p>
        </div>

        {Object.entries(mufLines).map(([docType, lines]) => (
          <div className="child-fiels-container" key={docType}>
            <p style={{margin:'10px 15px'}}> Documento: {docType.replace('_', ' ').toUpperCase()} </p>
            {(lines || []).map((line, index) => (
              <MUFLine
                key={`${docType}-${index}`}
                requiredFile={docType === 'birth_certificate_child' ? 'Fotocopia del Registro Civil de Nacimiento por ambos lados y con sellos (legible)' :
                              docType === 'child_id' ? 'Fotocopia de la Tarjeta de Identidad preferiblemente ampliada al 150%' :
                              'Certificado de estudio, el cual debe ser actualizado.'}
                fileName={`${docType}_${index + 1}`}
                userId={props.userId}
                devNameFile={`${docType.toUpperCase()}_${index + 1}`}
                onFileChange={(data) => handleFileChange(docType, data)}
              />
            ))}
            {/*<button type="button" onClick={() => handleAddLine(docType)}>Agregar línea para {docType.replace('_', ' ').toUpperCase()}</button>*/}
            <button 
              type="button" 
              className="btn btn-primary btn-funda"
              style={{margin:'0 15px'}}   
              onClick={() => handleAddLine(docType)} >Agregar Documento</button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default AffiliationFiles;
