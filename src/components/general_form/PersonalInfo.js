import React, { useState } from 'react';
import DateTime from "react-datetime"; /* https://www.npmjs.com/package/react-datetime */
import LabelOneField from "../general_components/LabelOneField";
import LabelTwoFields from "../general_components/LabelTwoFields";
import "react-datetime/css/react-datetime.css"
import "../../../node_modules/react-datetime/css/react-datetime.css"
import LabelOneSelect from "../general_components/LabelOneSelect";
import UploadPicture from './UploadPicture';

function PersonalInformation( {nameBox, onGenderChange, userData} ){

    /*const [selectedGender, setSelectedGender] = useState('');
    
    const handleGenderChange = (value) => {
        setSelectedGender(value);
        onGenderChange(value); //
    };*/

  const [imageSrc, setImageSrc] = useState(null);

  const handleImageChange = (newImageSrc) => {
      if(userData?.photo) setImageSrc(userData?.photo)
      else setImageSrc(newImageSrc); // Actualiza el estado de la imagen
    };

  return(
      <div className="form-box">
        <h3>{nameBox}</h3>

        <UploadPicture 
            labelText={'Foto tipo documento (fondo blanco para carnet):'}
            imageSrc={imageSrc} // Pasa el estado de la imagen como prop
            onImageChange={handleImageChange} // Pasa la función para manejar el cambio de la imagen
            userData={userData}
        />

        <div className="box-date">
          <div className="one-field-container">
            <label htmlFor='birth_date'>Fecha de nacimiento: </label>
              <DateTime
              id="birth_date"
              inputProps={{ placeholder: "aaaa/mm/dd", name:'birth_date'}}
              value={userData?.birth_date ? new Date(userData.birth_date): new Date()}
              dateFormat="YYYY/MM/DD"
              timeFormat={false}
            />
          </div>
          <div className="one-field-container">
          <label htmlFor='birth_place'>Lugar de Nacimiento:</label>
            <input 
            id="birth_place" 
            type="text" 
            placeholder="Lugar de nacimiento"
            required={true} 
            name= 'birth_place'
            defaultValue={userData?.birth_place}
            />
          </div>  
        </div>
        
        <div className='u1'>
          <LabelTwoFields
            labelText="Documento de Identidad:"
            inputPlaceholder="Número de documento"
            inputId={"id_document"}
            inputType={"text"}
            required={true}
            minLength={7}
            defaultValue={userData?.id_document}
            

            labelText2={"De: "}
            inputPlaceholder2={"Lugar de expedición"}
            inputId2={"city_id_document"}
            inputType2={"text"}
            required2={true}
            minLength2={2}
            defaultValue2={userData?.city_id_document}
          />
        </div>
        

        <div className='two-field-container'>
          <LabelOneSelect
            labelText={"Género:"} 
            selectText={"Seleccione su género"}
            initialOptions={['Masculino', 'Femenino']}
            required={true}
            //onChange={handleGenderChange}
            selectId={"gender"}
            defaultValue={userData?.gender}
          />

          <LabelOneField 
            labelText={"RH: "}
            inputPlaceholder={"RH"}
            inputId={"blood_type"}
            inputType={"text"}
            required={true}
            minLength={2}
            defaultValue={userData?.blood_type}
          />
        </div>

        <div className="two-field-container">
          <LabelOneField
            labelText={"No. Cuenta Bancaria:"}
            inputPlaceholder={"No. Cuenta"}
            inputId={"bank_account_number"}
            inputType={"number"}
            required={true}
            minLength={6}
            defaultValue={userData?.bank_account_number}
          />

          <LabelOneSelect 
            labelText={"Entidad Bancaria:"} 
            selectText={"Seleccione Entidad Bancaria"}
            selectId={"bank_name"}
            initialOptions={['BANCAMIA S.A.', 'BANCO AGRARIO', 'BANCO AV VILLAS', 'BANCO CAJA SOCIAL BCSC SA', 
            'BANCO COOPERATIVO COOPCENTRAL', 'BANCO CREDIFINANCIERA SA.', 'BANCO DAVIVIENDA SA', 'BANCO DE BOGOTA', 
            'BANCO DE OCCIDENTE', 'BANCO FALABELLA S.A.', 'BANCO FINANDINA S.A.', 'BANCO GNB SUDAMERIS', 
            'BANCO J.P. MORGAN COLOMBIA S.A', 'BANCO MUNDO MUJER', 'BANCO PICHINCHA', 'BANCO POPULAR', 
            'BANCO SANTANDER DE NEGOCIOS CO', 'BANCO SERFINANZA S.A', 'BANCO W S.A.', 'BANCOLDEX S.A.', 
            'BANCOLOMBIA', 'BANCOOMEVA', 'BBVA COLOMBIA', 'CITIBANK', 'COLTEFINANCIERA S.A', 'CONFIAR', 
            'COOFINEP COOPERATIVA FINANCIER', 'COOPERATIVA FINANCIERA DE ANTIOQUIA', 
            'COOTRAFA COOPERATIVA FINANCIERA', 'DAVIPLATA', 'FINANCIERA JURISCOOP S.A. COMP', 
            'GIROS Y FINANZAS CF', 'IRIS', 'ITAU', 'LULO BANK S.A.', 'MIBANCO S.A.', 'MOVII', 'NEQUI', 
            'RAPPIPAY', 'SCOTIABANK COLPATRIA S.A', 'BANKIA', 'COPRUDEA', 'COOPRUDEA', 'Cooprudea']}
            required={true}
            defaultValue={userData?.bank_name}
          />
        </div>
      </div>
  );
}

export default PersonalInformation;