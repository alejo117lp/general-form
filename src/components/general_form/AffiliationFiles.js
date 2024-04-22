import React, { useState } from "react";
import MUFLine from "./MUFLine";

function AffiliationFiles(props) {
  
  const comfUrl = "https://www.comfama.com/empresas/formatos-y-formularios/";

  // Estados para cada tipo de documento, usando un objeto para identificar cada tipo por clave.
  // Cada clave mantiene una lista de documentos cargados.
  const [mufLines, setMufLines] = useState({
    'REGISTRO_CIVIL_DE_NACIMIENTO': [],
    'TARJETA_DE_IDENTIDAD': [],
    'CERTIFICADO_DE_ESTUDIOS': []
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

  const formatDocumentType = (docType) => {
    return docType
    .toLowerCase() // Convertir todo a minúsculas
    .replace(/_/g, ' ') // Reemplazar todos los guiones bajos por espacios
    .replace(/\b\w/g, letter => letter.toUpperCase()); // Convertir la primera letra de cada palabra en mayúscula
  };

  return (
    <div className="form-box">
      <p className="file-title general-padding">
        Anexar la <a href={comfUrl} target="_blank" rel="noopener noreferrer">Declaración Juramentada de Comfama</a> y la siguiente documentación:
      </p>
      {/* Documentación Padres */}
      <div className="input-file-box-m">
        <div className="sub-files-t">
          <p>
            <span className="file-title">
            {'Documentación para la afilición de los padres'}:
            </span>
            {'  '}
          </p>
        </div>

        <div>
          <MUFLine 
            requiredFile= {'Copia de cédula ampliada al 150 de los padres'}
            userId={props.userId}
            devNameFile = {'CEDULA_PADRES'}
            onFileChange={(data) => handleFileChange('parents_id', data)}
          />

          <MUFLine 
            requiredFile= {'Registro Civil de Nacimiento del empleado'}
            userId={props.userId}
            devNameFile = {'REGISTRO_CIVIL_DE_NACIMIENTO'}
            onFileChange={(data) => handleFileChange('birth_certificate_employee', data)}
          />
        </div>
      </div>

      {/* Documentación Conyugue/Pareja */}
      <div className="input-file-box-m">
        <div className="sub-files-t">
          <p>
            <span className="file-title">
            {'Documentación para la afilición del cónyuge o pareja'}:
            </span>
            {'  '}
          </p>
        </div>

        <div>
          <MUFLine 
            requiredFile= {'Copia de la cédula ampliada al 150% (legible)'}
            userId={props.userId}
            devNameFile = {'CEDULA_CONYUGE'}
            onFileChange={(data) => handleFileChange('couple_id', data)}
          />

          <MUFLine 
            requiredFile= {'Acta de matrimonio o extra juicio según sea el caso'}
            userId={props.userId}
            devNameFile = {'ACTA_MATRIMONIO_EXTRAJUICIO'}
            onFileChange={(data) => handleFileChange('marriage_certificate', data)}
          />
        </div>
      </div>


      {/* Documentación Hijos */}
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
            <p style={{margin:'10px 15px', fontWeight:'500'}}>{`${formatDocumentType(docType)}`}: </p>
            {(lines || []).map((line, index) => (
              <MUFLine
                key={`${docType}-${index}`}
                requiredFile={`${formatDocumentType(docType)} ${index + 1}`}
                userId={props.userId}
                devNameFile={`${docType}_HIJO_${index + 1}`}
                onFileChange={(data) => 
                  handleFileChange
                  (docType==='REGISTRO_CIVIL_DE_NACIMIENTO'?'birth_certificate_child ':
                  docType==='TARJETA_DE_IDENTIDAD'? 'child_id':'studies_child_certification',data)}
              />
            ))}
            <button 
              type="button" 
              className="btn btn-primary btn-funda"
              style={{margin:'0 15px 25px 15px'}}   
              onClick={() => handleAddLine(docType)} >Agregar Documento</button>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
}

export default AffiliationFiles;
