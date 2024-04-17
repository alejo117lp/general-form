import React, { useState, useEffect } from 'react';
import '../../stylesheets/LabelOneSelect.css';


/*Este componente provee un label con su respectivo select dinámico, que permite insertar 
tantas opciones como se requieran */
const LabelOneSelect = ({ 
  initialOptions, 
  labelText, 
  selectText, 
  required, 
  selectId, 
  onChange,
  defaultValue 
}) => {

  //useState para verificar la opción elegida por el usuario
    const [selectedOption, setSelectedOption] = useState(defaultValue || '');

    useEffect(() => {
      // Esta verificación es útil si el valor por defecto puede cambiar después de que el componente ya se ha montado
      setSelectedOption(defaultValue || '');
    }, [defaultValue]);
  
    const handleSelectChange = (e) => {
      setSelectedOption(e.target.value);
      if (onChange) {
          onChange(e.target.value);
      }
    };
  
    return (
      <div className='select-label-container'>
        <div>
            <label htmlFor={selectId}>{labelText}</label>
        </div>
        <div className='select-container'>
          <select id={selectId} value={selectedOption} onChange={handleSelectChange} required={required} name={selectId}>
              <option value="" disabled>{selectText}</option>
              {initialOptions.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
              ))}
            </select>
        </div>
      </div>
    );
  };
  
  export default LabelOneSelect;