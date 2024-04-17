import React, { useState } from 'react';
import '../../App.css';
import '../../stylesheets/LabelOneField.css';
import '../../stylesheets/UploadPicture.css';
import defaultProfilePic from '../../img/profile_pic_default.jpg';
import LabelOneField from '../general_components/LabelOneField';
import { convertImageToBase64 } from "../functions/fileUtils";


function UploadPicture({ labelText, userData }) {
  const [imageSrc, setImageSrc] = useState(userData?.photo);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const base64Data = await convertImageToBase64(file);
        setImageSrc(base64Data);
        // Aquí se puede enviar base64Data a través de una solicitud HTTP o lo que necesites con ella
        console.log('Base64 conversion result:', base64Data);
      } catch (error) {
        console.error('Error al convertir la imagen a base64:', error);
      }
    }
  };

  return (
    <div className='name-and-pic'>
      <LabelOneField
        labelText={"Nombre Completo: "}
        inputPlaceholder={"Nombre Completo"}
        inputId={"full_name"}
        inputType={"text"}
        required={true}
        minLength={1}
        maxLength={80}
        defaultValue={userData?.full_name}
      />

      <div className='upload-pic-container'>
        <label className='label-upload-file'>{labelText}</label>
        <div>
          <input 
            id='profile_picture_input' 
            type="file" 
            name="photo" 
            onChange={handleImageChange} 
            accept='image/*' 
            />
        </div>
      </div>
      <div className='img-container'>
        {imageSrc ? (
          <img src={imageSrc} className="profile_picture" alt="Foto de Perfil" />
        ) : (
          <img src={defaultProfilePic} className="profile_picture" alt="Imagen por Defecto" />
        )}
      </div>
    </div>
  );
}

export default UploadPicture;
