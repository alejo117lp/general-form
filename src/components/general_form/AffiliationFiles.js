import React from "react";
import MUFLine from "./MUFLine";
import UploadFile from "./UploadFile";


function AffiliationFiles( props ){
  
  const comfUrl = "https://www.comfama.com/empresas/formatos-y-formularios/"
  
  const handleFileChange = (key, data) => {
    props.onFileDataChange(prev => ({ ...prev, [key]: data }));
  };

  return(
    <div>
      <p className="file-title general-padding">
        Anexar la <a href={comfUrl} target="_blank">Declaración Juramentada de Comfama</a>  y la siguiente documentación: 
      </p>

      <div className="input-file-box-m">
        <div className="sub-files-t">
          <p>
            <span className="file-title">
            {'Documentación para la afilición de los padres'}:
            </span>
            {'  '}
          </p>
        </div>

        <div style={{marginLeft:'-80px'}}>
          <MUFLine 
            requiredFile= {'Copia de cédula ampliada al 150 de los padres'}
            fileName= {'parents_'}
            userId={props.userId}
            devNameFile = {'DIPLOMA_BACHILLER'}
            onFileChange={(data) => handleFileChange('high_school_certification', data)}
          />

          <MUFLine 
            requiredFile= {'Registro Civil de Nacimiento del empleado'}
            fileName= {'bachelor_certification'}
            userId={props.userId}
            devNameFile = {'DIPLOMA_PREGRADO'}
            onFileChange={(data) => handleFileChange('bachelor_certification', data)}
          />
        </div>

        <div className="input-file-box-m">
          <div className="sub-files-t">
            <p>
              <span className="file-title">
              {'Documentación para la afilición del cónyuge o pareja'}:
              </span>
              {'  '}
            </p>
          </div>

          <div style={{marginLeft:'-80px'}}>
            <MUFLine 
              requiredFile= {'Copia de la cédula ampliada al 150% (legible)'}
              fileName= {'high_school_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_BACHILLER'}
              onFileChange={(data) => handleFileChange('high_school_certification', data)}
            />

            <MUFLine 
              requiredFile= {'Acta de matrimonio o extra juicio según sea el caso'}
              fileName= {'bachelor_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_PREGRADO'}
              onFileChange={(data) => handleFileChange('bachelor_certification', data)}
            />
          </div>
       </div>

       <div className="input-file-box-m">
          <div className="sub-files-t">
            <p>
              <span className="file-title">
              {'Documentación para la afilición de hijos'}:
              </span>
              {'  '}
            </p>
          </div>

          <div style={{marginLeft:'-80px'}}>
            <p style={{margin:'0 0 0 105px', fontWeight:'500'}}> De 0 a 7 años:</p>
            <MUFLine 
              requiredFile= {'Fotocopia del Registro Civil de Nacimiento por ambos lados y con sellos (legible)'}
              fileName= {'high_school_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_BACHILLER'}
              onFileChange={(data) => handleFileChange('high_school_certification', data)}
            />
          </div>

          <div style={{marginLeft:'-80px'}}>
            <p style={{margin:'0 0 0 105px', fontWeight:'500'}}> De 7 a 12 años:</p>
            <MUFLine 
              requiredFile= {'Fotocopia del Registro Civil de Nacimiento por ambos lados y con sellos (legible)'}
              fileName= {'high_school_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_BACHILLER'}
              onFileChange={(data) => handleFileChange('high_school_certification', data)}
            />

            <MUFLine 
              requiredFile= {'Fotocopia de la Tarjeta de Identidad preferiblemente ampliada al 150%'}
              fileName= {'high_school_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_BACHILLER'}
              onFileChange={(data) => handleFileChange('high_school_certification', data)}
            />
          </div>

          <div style={{marginLeft:'-80px'}}>
            <p style={{margin:'0 0 0 105px', fontWeight:'500'}}> De 12 años en adelante:</p>
            <MUFLine 
              requiredFile= {'Fotocopia del Registro Civil de Nacimiento por ambos lados y con sellos (legible)'}
              fileName= {'high_school_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_BACHILLER'}
              onFileChange={(data) => handleFileChange('high_school_certification', data)}
            />

            <MUFLine 
              requiredFile= {'Fotocopia de la Tarjeta de Identidad preferiblemente ampliada al 150%'}
              fileName= {'high_school_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_BACHILLER'}
              onFileChange={(data) => handleFileChange('high_school_certification', data)}
            />

            <MUFLine 
              requiredFile= {'Certificado de estudio, el cual debe ser actualizado.'}
              fileName= {'high_school_certification'}
              userId={props.userId}
              devNameFile = {'DIPLOMA_BACHILLER'}
              onFileChange={(data) => handleFileChange('high_school_certification', data)}
            />
          </div>
       </div>

      </div>
    </div>
  )
}

export default AffiliationFiles;