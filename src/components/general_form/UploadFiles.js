import React, { useState } from "react";
import UploadFile from "./UploadFile";
import '../../stylesheets/UploadFile.css';
import MUFLine from "./MUFLine";
import UploadFileWithDate from "./UploadFileWithDate";

function UploadFiles ( props ){

  const [fileDatas, setFileDatas] = useState({});
  
  // Función para actualizar el estado con los datos del archivo
  const handleFileChange = (key, data) => {
      props.onFileDataChange(prev => ({ ...prev, [key]: data }));
  };

  return(
    <div className="form-box">
      <h3>{props.nameBox}</h3>
      <div>
                
        <UploadFile 
          requiredFile= {'Cédula:'}
          descriptionFile = {'Ambas caras en la misma página, ampliada al 150%'}
          fileName = {'id_file'}
          userId = {props.userId}
          devNameFile = 'CEDULA'
          onFileChange={(data) => handleFileChange('id_file', data)}
        />

        <UploadFile 
          requiredFile= {'Hoja de Vida:'}
          descriptionFile = {'En caso de ser nuevo para la Fundación UdeA'}
          fileName = {'curriculum_vitae'}
          userId = {props.userId}
          devNameFile = 'HOJA_DE_VIDA'
          onFileChange={(data) => handleFileChange('curriculum_vitae', data)}
        />

        <div className="input-file-box-m">
          <div className="sub-files-t">
            <p>
              <span className="file-title">
              {'Soportes Académicos'}:
              </span>
              {'  ' + 'No enviar los cursos, solo graduaciones, y solo en caso de ser nuevo para la fundación.'}
            </p>
          </div>

          <MUFLine 
            requiredFile= {'Diploma o acta de bachiller'}
            fileName= {'high-school-certification'}
            userId={props.userId}
            devNameFile = {'DIPLOMA_BACHILLER'}
          />

          <MUFLine 
            requiredFile= {'Diploma o acta de pregrado'}
            fileName= {'bachelor-certification'}
            userId={props.userId}
            devNameFile = {'DIPLOMA_PREGRADO'}
          />

          <MUFLine 
            requiredFile= {'Diploma o acta de postgrado'}
            fileName= {'postgraduate-certification'}
            userId={props.userId}
            devNameFile = {'DIPLOMA_POSTGRADO'}
          />

          <MUFLine 
            requiredFile= {'Diploma o acta de especialización'}
            fileName= {'master-certification'}
            userId={props.userId}
            devNameFile = {'DIPLOMA_ESPECIALIZACION'}
          />
        </div>

        <UploadFileWithDate
          requiredFile = {'Certificado de Antecedentes Judiciales:'}
          descriptionFile = {'Únicamente el de la página web de la Policía Nacional'}
          labelDateText = {'Fecha de Expedición:'}
          fileName = {'judicial_background'}
          userId = {props.userId}
          devNameFile = {'CERTIFICADO_DE_ANTECEDENTES_JUDICIALES'}
        />

        <div className="input-file-box-m">
          <div className="sub-files-t">
            <p>
              <span className="file-title">
              {'Soportes Laborales'}:
              </span>
              {'  ' + 'Últimas 3 empresas cada carta en un PDF marcado (en caso de ser nuevo para la FUNDACION UDEA)'}
            </p>
          </div>

          <MUFLine 
            requiredFile= {'Carta Laboral 1'}
            fileName= {'working_letter_1'}
            userId={props.userId}
            devNameFile = {'CARTA_LABORAL'}
            enterpriseName = {true}
          />

          <MUFLine 
            requiredFile= {'Carta Laboral 2'}
            fileName= {'working_letter_2'}
            userId={props.userId}
            devNameFile = {'CARTA_LABORAL'}
            enterpriseName = {true}
          />

          <MUFLine 
            requiredFile= {'Carta Laboral 3'}
            fileName= {'working_letter_3'}
            userId={props.userId}
            devNameFile = {'CARTA_LABORAL'}
            enterpriseName = {true}
          />
        </div>

        <UploadFileWithDate
          requiredFile = {'Certificado de Afiliación EPS'}
          descriptionFile = {'No se admite del Adres solo el que emite la EPS. No superior a 1 mes'}
          labelDateText = {'Fecha de Expedición:'}
          fileName = {'eps_certification'}
          userId = {props.userId}
          devNameFile = {'CERTIFICADO_DE_AFILIACION_A_EPS'}
        />


        <UploadFileWithDate
          requiredFile = {'Certificado de Afiliación al Fondo de Pensiones:'}
          descriptionFile = {'El que emite la entidad, sino tiene fondo aún debe enviar una carta solicitando a que fondo privado desea afiliarse. (Sin clave de bloqueo) No superior a 1 mes.'}
          labelDateText = {'Fecha de Expedición:'}
          fileName = {'pension_certification'}
          userId = {props.userId}
          devNameFile = {'CERTIFICADO_DE_AFILIACION_FONDO_A_PENSION'}
        />

        <UploadFileWithDate
          requiredFile = {'Certificado de Afiliación al Fondo de Cesantías:'}
          descriptionFile = {'El que emite la entidad, sino tiene fondo aún debe enviar una carta solicitando a que fondo privado desea afiliarse. (Sin clave de bloqueo) No superior a 1 mes.'}
          labelDateText = {'Fecha de Expedición:'}
          fileName = {'severance_certification'}
          userId = {props.userId}
          devNameFile = {'CERTIFICADO_DE_AFILIACION_FONDO_A_CESANTIAS'}
        />

        <UploadFileWithDate
          requiredFile = {'Certificado Bancario:'}
          descriptionFile = {'No superior a 1 mes.'}
          labelDateText = {'Fecha de Expedición:'}
          fileName = {'bank_certification'}
          userId = {props.userId}
          devNameFile = {'CERTIFICADO_BANCARIO'}
        />

        <UploadFile 
          requiredFile= {'Declaración Juramentada de Comfama:'}
          descriptionFile =
           {'(solo si tiene beneficiarios resultado de unión libre y los padres, en caso de no tener este caso no se debe enviar) debe ser con firma original. Cuando se trata de conyugue e hijos no se debe diligenciar este formato ya que con el registro civil de nacimiento y matrimonio se certifica el parentesco y se afilia.'}
          fileName = {'sworn_declaration_comfama'}
          userId = {props.userId}
          devNameFile = {'DECLARACION_JURAMENTADA_COMFAMA'}
        />
        <label className="general-padding">
          Tiene beneficiarios a la EPS o Caja de Compensación Familiar:
          <input 
            className="check-family-afiliation" 
            type="checkbox"
            value={true}
          />
        </label>

      </div>
    </div>
  );
}

export default UploadFiles;