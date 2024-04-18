import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/general_components/Header';
import ResponsiveSidebar from './components/general_components/ResponsiveSidebar';
import GeneralForm from './components/general_form/GeneralForm';
import Login from './components/login/Login';
import DataTreatment from './components/data_treatment/DataTreatment';
import Profile from './components/profile/Profile';
import RecoverPassword from './components/recover_password/RecoverPassword';
import useAxiosRequest from './components/backend/useAxiosRequest';
import AuthPersonalData from './components/docs/AuthDatosPersonales.pdf';
import { useNavigate } from "react-router-dom";
import BootstrapTest from './components/TESTING/BootstrapTest';


const politics = 'https://www.fundacionudea.com/sitio/img/POLITICASDEPROTECCIONDEDATOSPERS%20-%20Copy%201.pdf';
const urlDev = process.env.REACT_APP_URL_TEST;
const id = '3030303030';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <Router>
      <MainApp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </Router>
  );
}

function MainApp( {isLoggedIn, setIsLoggedIn} ) {
  
 
  const navigate = useNavigate();
  const { responseData, sendRequest } = useAxiosRequest();
  const [dataFetched, setDataFetched] = useState(false);

  useEffect(() => {
    
    if (!dataFetched && id) {
      sendRequest({
        url: `${urlDev}${id}`,
        method: 'GET'
      }).then(() => {
        //console.log("CONEXIÓN EXITOSA EN APP.JS A LA BD")
        setDataFetched(true); // Evita futuras llamadas
      });
    }
  }, [dataFetched, sendRequest]);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else if (isLoggedIn && responseData?.is_data_treatment_accepted === 0) {
      navigate('/data-treatment');
    }
  }, [isLoggedIn, responseData, navigate]);

  return (
    <div className="App">
      {['/login', '/data-treatment', '/recover-password'].includes(window.location.pathname) ? null : (
        <>
          <ResponsiveSidebar headerText={'Menú Navegación'} userData={responseData} />
          <Header />
        </>
      )}
      <Routes>
        <Route path='/' element= {<GeneralForm id={id}/>}/>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/data-treatment" element={<DataTreatment linkAuth={AuthPersonalData} linkPol={politics} userData={responseData} />} />
        <Route path="/profile" element={<Profile userData={responseData} />} />
        <Route path="/general-form" element={<GeneralForm id={id} setDataFetched={setDataFetched} />} />
        <Route path='/recover-password' element={<RecoverPassword />} />
        <Route path='/bootstrap' element={<BootstrapTest />} />
        
      </Routes>
    </div>
  );
 
  /*const currentPath = useLocation().pathname;
  const navigate = useNavigate();
  const { responseData, sendRequest } = useAxiosRequest();
  const [dataFetched, setDataFetched] = useState(false);


  useEffect(() => {
    const id = '3030303030';

    if (!dataFetched && id) {
      sendRequest({
        url: `http://localhost:3001/api/empleados/${id}`,
        method: 'GET'
      }).then(() => {
        setDataFetched(true); // Evita futuras llamadas
      });
    }
  // Agrega `dataFetched` a las dependencias para evitar llamadas innecesarias
  }, [currentPath, dataFetched, sendRequest]);

  return (
    <div className="App">
      {currentPath !== '/login' && 
       currentPath !== '/data-treatment' &&
       currentPath !== '/recover-password' && (
        <div> 
          <ResponsiveSidebar headerText={'Menú Navegación'} userData={responseData} />
          <Header />
        </div>
      )}
    
       <Routes>
        {isLoggedIn ? (
          <>
            {responseData?.is_data_treatment_accepted === 0 && (
              <Route path='/data-treatment' 
                element={<DataTreatment 
                  linkAuth={AuthPersonalData} 
                  linkPol={politics} 
                  userData={responseData}
                />}
              />
            )}

            {responseData?.is_data_updated === 'Si' ? (
              <>
                <Route path='/profile' element={<Profile userData={responseData} />} />
                <Route path="/general-form" 
                  element={<GeneralForm
                    userData={responseData} 
                    setDataFetched={setDataFetched}
                  />}
                />
              </>
            ): (
              <Route path="/general-form" 
                element={<GeneralForm
                  userData={responseData} 
                  setDataFetched={setDataFetched}
                />}
              />
            )}
            
          </>
        ) : (
          <Route path="/login" element={<Login userData={responseData} setIsLoggedIn={setIsLoggedIn}/>} />
        )}
        <Route path='/recover-password' element={<RecoverPassword />} />
      </Routes>

    </div>
  );*/
}

export default App;
