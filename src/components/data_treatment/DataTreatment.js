import React, { useState } from "react";
import '../../stylesheets/Login.css';
import fundaLogo from "../../img/funda-logo.png";
import { useNavigate } from "react-router-dom";
import useAxiosRequest from "../backend/useAxiosRequest";


function DataTreatment( {linkAuth, linkPol, userData} ){

    const [isChecked1, setIsChecked1] = useState(false);
    const [isChecked2, setIsChecked2] = useState(false);
    const navigate = useNavigate();
    const { sendRequest } = useAxiosRequest();

    const handleSubmit = async (event) => {
      event.preventDefault();

      const updateData = {
        'id_document': userData?.id_document,
        'is_data_treatment_accepted': 1
      };

      try{
        await sendRequest ({
          url: 'http://localhost:3001/api/empleados/actualizar',
          method: 'POST',
          data: updateData
        });

        if(userData?.is_data_updated === 'No' ){
          navigate('/general-form');
        } else if(userData?.is_data_updated === 'Si') navigate ('/profile');

      } catch (error){
        console.error('error al actualizar is_data_treatment_accepted', error);
      }
    };

  return(
    <div className="general-background">
      <div className="left-zone">
        <div className="logo-container">
          <img 
            className="logo-background"
            src={fundaLogo}
            alt="Logo Background"
          />
        </div>
      </div>
      <div className="right-zone">
        <div className='principal-container log-view'>
          <div className='secondary-container'>
            <div className='logo-container'>
                <img 
                  className="logo-background mobile"
                  src={fundaLogo}
                  alt="Logo Background"
                />
            </div>
            <form className="form-box-login" onSubmit={handleSubmit}>
              <div className="general-tc-container">
                  <div className="tc-container">
                    <div className="tc-container-pos">
                        <input  
                        className="checkbox_conf" 
                        type="checkbox" 
                        checked={isChecked1}
                        onChange={()=> setIsChecked1((prev) => !prev)}
                        />
                        <label>
                          <strong>Acepto</strong> la <a href={linkPol} target="_blank" rel="noreferrer">Política de Tratamiento de Datos.</a>
                        </label>
                    </div>
                    
                    <div className="tc-container-pos">
                      <input  
                      className="checkbox_conf" 
                      type="checkbox" 
                      checked={isChecked2}
                      onChange={()=> setIsChecked2((prev) => !prev)}
                      />
                      <label>
                          <strong>Autorizo</strong> el <a href={linkAuth} target="_blank"  rel="noreferrer">Tratamiento de Datos Personales.</a>
                      </label>
                    </div>
                  </div>
                  <div>
                    <button className='principal-button' type="submit" disabled={!isChecked1 || !isChecked2} >Continuar</button>
                  </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataTreatment;