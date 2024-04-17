import React, { useEffect, useState } from "react";
import useAxiosRequest from "../backend/useAxiosRequest";
import LabelOneSelect from "../general_components/LabelOneSelect";

export default function TestComponent(props) {

    const URI = 'https://api-colombia.com/api/v1/';
    const { responseData, sendRequest } = useAxiosRequest();
    const [departmentNames, setDepartmentNames] = useState([]); // Estado para almacenar los nombres de los departamentos

    useEffect(() => {
        sendRequest({
            url: `${URI}Department`,
            method: 'GET'
        });
    }, [sendRequest]);

    useEffect(() => {
        if (responseData && Array.isArray(responseData)) {
            // Asegúrate de que responseData es un arreglo antes de intentar mapearlo
            const names = responseData.map(dept => dept.name); // Extrae los nombres de cada departamento
            setDepartmentNames(names); // Actualiza el estado con los nombres obtenidos
        }
    }, [responseData]); // Este useEffect se activará cuando 'responseData' cambie.

    return (
        <div>
            <h2>RESULTADO BÚSQUEDA</h2>
            <LabelOneSelect 
                labelText={"Municipio:"} 
                selectText={"Seleccione municipio de residencia"}
                selectId={'home_city'}
                initialOptions={departmentNames}
                required={true}
            />
        </div>
    );
}

