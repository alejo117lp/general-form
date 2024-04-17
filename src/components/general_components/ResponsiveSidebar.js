import React from "react";
import '../../stylesheets/Header.css'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
/*  Icons are taken from: https://fontawesome.com/v4/icons/ */
/* Código tomado de https://www.devwares.com/blog/create-responsive-sidebar-in-react/ */

function ResponsiveSidebar( {headerText, userData} ){

  const handleSubmit = () =>{
    console.log('SE HA CERRADO SESIÓN');
  } 

  return(
    <div style={{position:'fixed', display: 'flex', height: '100vh', 
         overflow: 'scroll initial',  fontFamily: 'Work Sans'}}>

      <CDBSidebar textColor= "#fff" backgroundColor="#333" toggled={true}>

        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large" style={{ fontSize: '32px'}}></i>}>
          {headerText}
        </CDBSidebarHeader>
     
      <CDBSidebarContent className="sidebar-content">

        {userData?.is_data_updated === 'Si' && (
          <CDBSidebarMenu>

            <NavLink 
              to={/*`/profile/${userData?.id_document}`*/ '/profile'} activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="user">Perfil</CDBSidebarMenuItem>
            </NavLink>

            <NavLink to={/*`/general-form/${userData?.id_document}`*/ '/general-form'} activeclassname="activeClicked">
              <CDBSidebarMenuItem icon="file">Formulario Datos Generales</CDBSidebarMenuItem>
            </NavLink>

          </CDBSidebarMenu>
        )}
           
        </CDBSidebarContent>

        <CDBSidebarFooter /*style={{ textAlign: 'center' }}*/ >
          <div className="sidebar-btn-wrapper" style={{padding: '20px 0'}}>
            <CDBSidebarMenuItem icon="user-times">
              <button type="submit" onClick={handleSubmit}>Cerrar Sesión</button>
            </CDBSidebarMenuItem>
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
}

export default ResponsiveSidebar;