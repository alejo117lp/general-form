import React, { useState } from "react";
import '../../stylesheets/Login.css';
import { useForm } from "react-hook-form";
import fundaLogo from "../../img/funda-logo.png";

function RecoverPassword(){

    const { 
        register, 
        formState: { errors } ,
        handleSubmit
    } = useForm();

    const [hideElt, setHideElt] = useState(false);
    const [emailValue, setEmailValue] = useState('');
    
    const onSubmit = (data) =>{
        console.log(data);
        setEmailValue(data.email); // Guardar el correo electrónico en el estado
        setHideElt(true);
    } 

    console.log(errors);


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
              <div className='form-box-login'>
                <form className={`Login-box ${hideElt ? 'elt-hidden' : ''}`} onSubmit={handleSubmit((onSubmit))}>
                  <div className='register-container'>
                    <div>
                        <h5>Recupera tu Contraseña</h5>
                        <p>
                            Ingresa los siguientes datos:
                        </p>
                    </div>
                    <label htmlFor='username' type='text'>Usuario: </label>
                    <div className='input-with-logo'>
                      <i className="icon-input fa fa-user c-ico-1" aria-hidden="true"></i>
                      <input 
                      {...register('username', 
                      {required: 'Ingrese su usuario', 
                      minLength: {value: 4, message:'Debes tener al menos 4 caracssteres'}})}
                      aria-invalid={errors.username ? 'true' : 'false'}
                      id= 'username' type='text' placeholder= 'Ingresa tu usuario' required={true}/>
                    </div>
                    {errors.username && <p role="alert">{errors.username.message}</p>}
                  </div>
                  <div className='register-container'>
                    <label>Email: </label>
                    <div className='input-with-logo'>
                      <i className="icon-input fa fa-envelope c-ico-1" aria-hidden="true"></i>
                      <input {...register('email', {required:'Ingrese un correo válido', 
                      minLength:{value:5, message:'Verifique su constraseña'}})}
                      id='email' type='email' placeholder='Ingrese su correo electrónico'
                      required={true}/>
                    </div>
                    {errors.password && <p role="alert">{errors.email.message}</p>}
                  </div>
                  <div className='register-container'>
                    <button className='principal-button' type="submit">Recuperar Contraseña</button>
                  </div>
                </form>
                <div className={`show-message ${hideElt ? '' : 'elt-hidden'}`}>
                    <p>Se ha enviado su contraseña de recuperación a:</p>
                    <strong>{emailValue}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default RecoverPassword;