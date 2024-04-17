import React, { useState } from "react";
import '../../stylesheets/LabelOneField.css'

function LabelThreeFields( {
    labelText, 
    inputId, 
    inputType, 
    inputPlaceholder,
    minLength, 
    maxLength,
    pattern,
    defaultValue,
    labelText2, 
    inputId2, 
    inputType2, 
    inputPlaceholder2,
    minLength2, 
    maxLength2,
    pattern2,
    defaultValue2,
    labelText3, 
    inputId3, 
    inputType3, 
    inputPlaceholder3,
    minLength3, 
    maxLength3,
    pattern3,
    readOnly, 
    required, 
    required2, 
    required3,
    defaultValue3
} ){

    const [validationErrors, setValidationErrors] = useState({
        name: "",
        name2: "",
        name3: ""
    });
    
    const handleKeyDown = (event, inputType) => {
        if (inputType === 'number' && !/[0-9]/.test(event.key)
            && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

    /*const shouldPreventKeyDown = (type1, type2) => {
        return (type1 === 'number' && type2 === 'text') || (type1 === 'text' && type2 === 'number');
    };*/

    const handleInputChange = (event, name, minLength, maxLength, pattern) => {
        const value = event.target.value;
        let error = "";
        if (required && value.trim() === "") {
            error = "Este campo es obligatorio.";
        } else if (minLength && value.length < minLength) {
            error = "La información ingresada es demasiado corta.";
        } else if (maxLength && value.length > maxLength) {
            error = "La información ingresada es demasiado larga.";
        } else if (pattern && !RegExp(pattern).test(value)) {
            error = "La información ingresada no es válida.";
        }
        setValidationErrors(prevState => ({ ...prevState, [name]: error }));
    };

    return (
        <div className="three-field-container">
            <div className="one-field-container">
                <label htmlFor={inputId}>{labelText}</label>
                <input
                    id={inputId}
                    type={inputType}
                    placeholder={inputPlaceholder}
                    name={inputId}
                    minLength={minLength}
                    maxLength={maxLength}
                    pattern={pattern}
                    readOnly={readOnly}
                    defaultValue={defaultValue}
                    required={required}
                    onChange={(event) => handleInputChange(event, inputId , minLength, maxLength, pattern)}
                    onKeyDown={(event) => handleKeyDown(event, inputType)} />
                    {validationErrors.input1 && (
                    <div className="error-message">
                        {validationErrors.input1}
                    </div>
                )}
            </div>
            
            <div className="one-field-container">
                <label htmlFor={inputId2}>{labelText2}</label>
                <input
                    id={inputId2}
                    type={inputType2}
                    placeholder={inputPlaceholder2}
                    name={inputId2}
                    minLength={minLength2}
                    maxLength={maxLength2}
                    pattern={pattern2}
                    defaultValue={defaultValue2}
                    readOnly={readOnly}
                    required={required2}
                    onChange={(event) => handleInputChange(event, inputId2, minLength2, maxLength2, pattern2)}
                    onKeyDown={(event) => handleKeyDown(event, inputType2)} />
                    {validationErrors.input2 && (
                    <div className="error-message">
                        {validationErrors.input2}
                    </div>
                )}
            </div>
            
            <div className="one-field-container">
                <label htmlFor={inputId3}>{labelText3}</label>
                <input
                    id={inputId3}
                    type={inputType3}
                    placeholder={inputPlaceholder3}
                    name= {inputId3}
                    minLength={minLength3}
                    maxLength={maxLength3}
                    defaultValue={defaultValue3}
                    pattern={pattern3}
                    readOnly={readOnly}
                    required={required3}
                    onChange={(event) => handleInputChange(event, inputId3, minLength3, maxLength3, pattern3)}
                    onKeyDown={(event) => handleKeyDown(event, inputType3)} />
                    {validationErrors.input3 && (
                    <div className="error-message">
                        {validationErrors.input3}
                    </div>
                )}
            </div>
            
        </div>
    );
}

export default LabelThreeFields;
