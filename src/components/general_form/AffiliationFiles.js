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

        <div className="marginL">
          <MUFLine 
            requiredFile= {'Copia de cédula ampliada al 150 de los padres'}
            fileName= {'parents_id'}
            userId={props.userId}
            devNameFile = {'CEDULA_PADRES'}
            onFileChange={(data) => handleFileChange('parents_id', data)}
          />

          <MUFLine 
            requiredFile= {'Registro Civil de Nacimiento del empleado'}
            fileName= {'birth_certificate_employee'}
            userId={props.userId}
            devNameFile = {'REGISTRO_CIVIL'}
            onFileChange={(data) => handleFileChange('birth_certificate_employee', data)}
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

          <div className="marginL">
            <MUFLine 
              requiredFile= {'Copia de la cédula ampliada al 150% (legible)'}
              fileName= {'couple_id '}
              userId={props.userId}
              devNameFile = {'CEDULA_PAREJA'}
              onFileChange={(data) => handleFileChange('couple_id ', data)}
            />

            <MUFLine 
              requiredFile= {'Acta de matrimonio o extra juicio según sea el caso'}
              fileName= {'marriage_certificate'}
              userId={props.userId}
              devNameFile = {'ACTA_MATRIMONIO_EXTRAJUICIO'}
              onFileChange={(data) => handleFileChange('marriage_certificate', data)}
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

          <div className="marginL">
            <p className="marginL2"> De 0 a 7 años:</p>
            <MUFLine 
              requiredFile= {'Fotocopia del Registro Civil de Nacimiento por ambos lados y con sellos (legible)'}
              fileName= {'birth_certificate_child '}
              userId={props.userId}
              devNameFile = {'REGISTRO_CIVIL_HIJO'}
              onFileChange={(data) => handleFileChange('birth_certificate_child ', data)}
            />
          </div>

          <div className="marginL">
            <p className="marginL2"> De 7 a 12 años:</p>
            <MUFLine 
              requiredFile= {'Fotocopia del Registro Civil de Nacimiento por ambos lados y con sellos (legible)'}
              fileName= {'birth_certificate_child'}
              userId={props.userId}
              devNameFile = {'REGISTRO_CIVIL_HIJO'}
              onFileChange={(data) => handleFileChange('birth_certificate_child', data)}
            />

            <MUFLine 
              requiredFile= {'Fotocopia de la Tarjeta de Identidad preferiblemente ampliada al 150%'}
              fileName= {'child_id'}
              userId={props.userId}
              devNameFile = {'TARJETA_IDENTIDAD_HIJO'}
              onFileChange={(data) => handleFileChange('child_id', data)}
            />
          </div>

          <div className="marginL">
            <p className="marginL2"> De 12 años en adelante:</p>
            <MUFLine 
              requiredFile= {'Fotocopia del Registro Civil de Nacimiento por ambos lados y con sellos (legible)'}
              fileName= {'birth_certificate_child'}
              userId={props.userId}
              devNameFile = {'REGISTRO_CIVIL_HIJO'}
              onFileChange={(data) => handleFileChange('birth_certificate_child', data)}
            />

            <MUFLine 
              requiredFile= {'Fotocopia de la Tarjeta de Identidad preferiblemente ampliada al 150%'}
              fileName= {'child_id'}
              userId={props.userId}
              devNameFile = {'TARJETA_IDENTIDAD_HIJO'}
              onFileChange={(data) => handleFileChange('child_id', data)}
            />

            <MUFLine 
              requiredFile= {'Certificado de estudio, el cual debe ser actualizado.'}
              fileName= {'studies_certification'}
              userId={props.userId}
              devNameFile = {'CERTIFICADO_ESTUDIO_HIJO'}
              onFileChange={(data) => handleFileChange('studies_certification', data)}
            />
          </div>
       </div>
      </div>
    </div>
  )
}

export default AffiliationFiles;