import React from "react";
import LabelOneSelect from "../general_components/LabelOneSelect";

function EndowmentInformation( {nameBox, sizeOptions, userData} ){
  //console.log("Opciones de talla:", sizeOptions);
  return(
  <div className="form-box">
    <h3>{nameBox}</h3>
    <div className="three-fields-container">
      <LabelOneSelect 
        labelText={"Talla Pantalón: "}
        selectText={"Seleccione su talla de Pantalón"}
        initialOptions= {sizeOptions}
        selectId={'pant_size'}
        required={userData?.employee_project!== 'Administrativo'}
        defaultValue={userData?.pant_size}
      />

      <LabelOneSelect 
        labelText={"Talla Camisa: "}
        selectText={"Seleccione su talla Camisa"}
        selectId={'shirt_size'}
        required={userData?.employee_project !== 'Administrativo'}
        initialOptions={['XS', 'S', 'M', 'L', 'XL', 'M', 'XXL', '40', '16', '10',
          '12', '38', '8', '14', '42', '36', '20', '18', '44', '34', '30', '24', 
          '52', '22', '32', '46', '54', '50', '48', '4XL', '41', '37', '39', '35', '43']}
          defaultValue={userData?.shirt_size}
      />

      <LabelOneSelect 
        labelText={"No. Calzado: "}
        selectText={"Seleccione su talla de Calzado"}
        selectId={'shoes_size'}
        required={userData?.employee_project !== 'Administrativo'}
        initialOptions={['34', '35', '36', '37', '38', '39', '40', '41', '42',
          '43', '44', '45']}
          defaultValue={userData?.shoes_size}
      />
    </div>
  </div>
  );
}

export default EndowmentInformation;