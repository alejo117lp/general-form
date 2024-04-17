import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate, NavLink } from "react-router-dom";
import '../../stylesheets/Login.css';
import '../../../src/App.css';
import fundaLogo from "../../img/funda-logo.png";

function Login( {userData, setIsLoggedIn} ){
  console.log('LOGINNN')
  const { 
    register, 
    formState: { errors } ,
    handleSubmit
  } = useForm();

  const navigate = useNavigate();

  const doLogin = async (data) => {
  
    setIsLoggedIn(true);
    console.log(setIsLoggedIn)
    if(userData?.is_data_treatment_accepted  === 0 || userData?.is_data_treatment_accepted  == null){
      navigate('/data-treatment'); 
    } else if(userData?.is_data_updated === 'No' || userData?.is_data_updated === null) navigate('/general-form');
    else if(userData?.is_data_updated === 'Si') navigate('/profile');
    else console.group('error al iniciar Sesión');
    

  /*const onSubmit = async (data) =>{
    setIsLoggedIn(true);
    if(userData?.is_data_treatment_accepted  === 0 || userData?.is_data_treatment_accepted  == null){
      navigate('/data-treatment'); 
    } else if(userData?.is_data_updated === 'No' || userData?.is_data_updated === null) navigate('/general-form');
    else if(userData?.is_data_updated === 'Si') navigate('/profile');
    else navigate('/profile');
  }*/

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
              <form className='Login-box' onSubmit={handleSubmit((doLogin))}>
                <div className='register-container'>
                  <h5>Inicio de Sesión</h5>
                  <br/>
                  <label htmlFor='username' type='text'>Usuario: </label>
                  <div className='input-with-logo'>
                    <i className="icon-input fa fa-user c-ico-1" aria-hidden="true"></i>
                    <input 
                    {...register('username', 
                    {required: 'Ingrese su usuario', 
                    minLength: {value: 4, message:'Debes tener al menos 4 caracteres'}})}
                    aria-invalid={errors.username ? 'true' : 'false'}
                    id= 'username' type='text' placeholder= 'Ingresa tu usuario' required={true}/>
                  </div>
                  {errors.username && <p role="alert">{errors.username.message}</p>}
                </div>
                <div className='register-container'>
                  <label>Contraseña: </label>

                  <div className='input-with-logo'>
                    <i className="icon-input fa fa-lock c-ico-1" aria-hidden="true"></i>

                    <input {...register('password', {required:'Contraseña incorrecta o no válida', 
                    minLength:{value:6, message:'Verifique su constraseña'}})}

                    id='password' type='password' placeholder='Ingresa tu contraseña'
                    required={true}
                    />
                  </div>
                  {errors.password && <p role="alert">{errors.password.message}</p>}
                </div>
                <div className='register-container'>
                  <button 
                    className='principal-button' 
                    type="submit">Iniciar Sesión</button>
                </div>
                <div className='register-container'> 
                  <NavLink 
                    to="/recover-password" 
                    className={({ isActive }) => (isActive ? 'activeClicked' : '')}>
                    <div className='recover-password' href=''>Recuperar contraseña</div>
                  </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default Login;