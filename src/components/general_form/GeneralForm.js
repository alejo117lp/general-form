import React, { useState, useEffect } from 'react';
import useAxiosRequest from '../backend/useAxiosRequest';
import PersonalInformation from './PersonalInfo';
import HomeInformation from './HomeInfo';
import SocialSecurity from './SocialSecurity';
import ExclusiveInitInfo from './ExclusiveInitInfo';
import EndowmentInformation from './Endowment';
import EndowmentEmvariasForm from './EndowmentEmvarias';
import UploadFiles from './UploadFiles';
import AffiliationFiles from './AffiliationFiles';


function GeneralForm({ id, setDataFetched }) {
  const manSize = ['28', '30', '32', '34', '36', '38'];
  const womanSize = ['6', '8', '10', '12', '14', '16', '18'];

  const [isChecked, setIsChecked] = useState(false);

  const urlDev = process.env.REACT_APP_URL_TEST;
  const [selectedGender, setSelectedGender] = useState('');
  const sizeOptions = selectedGender === 'Masculino' ? manSize : womanSize;
  const { responseData, sendRequest } = useAxiosRequest();

  const [fileData, setFileData] = useState({});
  const handleFileDataChange = (newFileData) => {
    setFileData(newFileData);
  };

  useEffect(()=>{
    
    sendRequest({
      url: `${urlDev}${id}`,
      method: 'GET'
    })
  },[])

  const handleGenderChange = (gender) => {
    setSelectedGender(gender);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      console.log('Formulario válido. Procesando envío...');
      
      // Crea FormData a partir del formulario
      const formData = new FormData(form);

      console.log([...formData]);
      console.log(fileData);
  
      // No es necesario establecer manualmente 'Content-Type': 'multipart/form-data'
      // Axios y el navegador se encargan de esto automáticamente cuando se usa FormData
      await sendRequest({
        url: `${urlDev}actualizar`,
        method: 'POST',
        data: formData,
      }).then(async() => {
        const updateStatusData = {
          id: responseData?.id,
          is_data_updated: 'Si'
        };

        await sendRequest({
          url: `${urlDev}actualizar`,
          method: 'POST',
          data: updateStatusData

        }).then(() =>{
          alert(responseData?.full_name + ", sus datos se han actualizado");
          console.log('is_data_updated ACTUALIZADO');
          setDataFetched(false); //Para hacer un nuevo Get y se habilite el barside
        }).catch (error =>{
          console.error('Error al actualizar is_data_updated', error);
        });

      }).catch(error => {
        console.error("Error durante el envío: ", error);
        alert("Hubo un error al actualizar los datos.");
      });
      
    } else {
      console.log('Formulario inválido. Por favor, completa todos los campos requeridos.');
      alert('Formulario inválido. Por favor, completa todos los campos requeridos.');
    }
  };

  return (
    <div className='principal-container'>
      <h1>Datos Generales</h1>
  
      <ExclusiveInitInfo nameBox={"Información Administrativa"} userData={responseData} />
      <br/>
      <form className='general-form' onSubmit={handleSubmit}>
        <PersonalInformation nameBox={"Información Personal"} onGenderChange={handleGenderChange} userData={responseData} />
        <br/>
        <HomeInformation nameBox={"Información Domicilio"} userData={responseData} />
        <br/>
        <SocialSecurity nameBox={"Información Seguridad Social"} userData={responseData} />
        <br/>
        {responseData?.employee_project === 'ASEO' ? (
          <EndowmentEmvariasForm nameBox={'Dotación Emvarias'} userData={responseData} />
        ) : (
          <EndowmentInformation nameBox={"Información Dotación"} gender={selectedGender} sizeOptions={sizeOptions} userData={responseData} />
        )}
        <br/>
        <UploadFiles 
          nameBox= {'Documentos'}
          userId= {responseData?.id_document}
          onFileDataChange={handleFileDataChange}
        />
        <br />

        <div className="form-check form-box">
          <input 
            className="form-check-input" 
            style={{marginLeft:'0', marginRight:'1rem',  borderColor:'#a3a3a3'}} 
            type="checkbox"
            checked={isChecked}
            onChange={()=> setIsChecked((prev) => !prev)}
            id="flexCheckDefault"
          />
          <label 
            className="form-check-label" 
            htmlFor="flexCheckDefault" 
            style={{fontStyle:'italic'}}>
            Tiene beneficiarios a la EPS o Caja de compensación familiar
          </label>
        </div>

        <br />

        {isChecked &&(
          <AffiliationFiles
            userId= {responseData?.id_document}
            onFileDataChange={handleFileDataChange}
          />
        )}

        <div>
          <button className='principal-button' type="submit">Enviar</button>
        </div>
      </form>
      <br/>
    </div>
  );
}

export default GeneralForm;

