import React from "react";
import LabelTwoFields from "../general_components/LabelTwoFields";
import "react-datetime/css/react-datetime.css";
import LabelOneField from "../general_components/LabelOneField";

function ExclusiveInitInfo( {userData, nameBox} ){

    return(

        <div className="form-box ExclusiveInitInfo">
            <h3>{nameBox}</h3>

            <LabelTwoFields 
                readOnly={true}
                labelText="Documento de Identidad:"
                inputId={"id_document"}
                inputType={"text"}
                defaultValue={userData?.id_document}

                readOnly2={true}
                labelText2={"Cargo: "}
                inputId2={"employee_rol"}
                defaultValue2={userData?.employee_rol}
                inputType2={"text"}
            />

            <LabelOneField 
                readOnly={true}
                labelText={"Correo Electrónico Laboral: "}
                inputId={"email_work"}
                defaultValue={userData?.email_work}
                inputType={"text"}
            />

             <LabelOneField
                readOnly={true}
                labelText={"Proyecto:"}
                inputId={"employee_project"}
                defaultValue={userData?.employee_project}
                inputType={"text"} 
            />

            <LabelTwoFields
                readOnly={true}
                labelText={"Fecha de ingreso:"}
                inputId={"entry_date"}
                defaultValue={userData?.entry_date}
                inputType={"text"}
                
                labelText2={"Centro de Costos:"}
                inputId2={"cost_center"}
                defaultValue2={userData?.cost_center}
                inputType2={"text"}
            />


            {userData?.employee_project === 'ASEO' && (
                <LabelOneField 
                readOnly={true}
                labelText={"Zona: "}
                inputId={"employee_zone"}
                defaultValue={userData?.employee_zone}
                inputType={"text"}
                />
                )
            }
            
            {userData?.employee_project=== 'METRO' && (
                <LabelOneField 
                readOnly={true}
                labelText={"Código de Tripulación: "}
                inputId={"employee_code"}
                defaultValue={userData?.employee_code}
                inputType={"text"}
                />
                )
            }

            <LabelTwoFields
                readOnly={true}
                labelText={"Nivel de Riesgo (ARL):"}
                inputId={"level_risk"}
                defaultValue={userData?.level_risk}
                inputType={"text"}

                labelText2={"Salario Asignado:"}
                inputId2={"salary"}
                defaultValue2={userData?.salary}
                inputType2={"text"}
            />
            
        </div>
       
    );
}

export default ExclusiveInitInfo;