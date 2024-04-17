import React, { useState } from "react";
import '../../stylesheets/LabelOneField.css'

/*Este componente provee DOS label con sus respectivos inputs*/
function LabelTwoFields( {
    labelText, 
    inputId, 
    inputType, 
    inputPlaceholder,
    readOnly, 
    required,
    minLength, 
    maxLength,
    pattern,
    labelText2, 
    inputId2, 
    inputType2, 
    inputPlaceholder2, 
    required2,
    minLength2, 
    maxLength2,
    pattern2,
    defaultValue,
    defaultValue2
} ){

    const [validationErrors, setValidationErrors] = useState ({
        input1: "",
        input2:""
    });

    const handleKeyDown = (event) => {

        if(inputType==='text'){
            return;
        }
        // Permite solo caracteres numéricos (0-9)
        if (!/[0-9]/.test(event.key)
            && event.key !== 'Backspace') {
            event.preventDefault();
        }
    };

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

    /*const shouldPreventKeyDown = (type1, type2) => {
        return (type1 === 'number' && type2 === 'text') || (type1 === 'text' && type2 === 'number');
    };*/

    return(
        <div className="two-field-container">
            <div className="one-field-container">
                <label htmlFor={inputId}>{labelText}</label>
                <input 
                id={inputId} 
                type={inputType} 
                placeholder={inputPlaceholder} 
                required={required} 
                name={inputId}
                readOnly={readOnly} 
                defaultValue={defaultValue}
                min={inputType === 'number' ? '0' : undefined}
                minLength={minLength}
                maxLength={maxLength} 
                pattern={pattern}
                onChange={(event) => handleInputChange(event, "input1", minLength, maxLength, pattern)}
                onKeyDown={(event) => handleKeyDown(event, inputType)}/>
                {validationErrors.input1 && (
                    <div className="error-message">
                        {inputPlaceholder+": "+validationErrors.input1}
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
                readOnly={readOnly} 
                required={required2}
                minLength={minLength2}
                maxLength={maxLength2} 
                defaultValue={defaultValue2}
                pattern={pattern2}
                onChange={(event) => handleInputChange(event, "input2", minLength2, maxLength2, pattern2)}
                min={inputType2 === 'number' ? '0' : undefined}
                onKeyDown={(event) => handleKeyDown(event, inputType2)}/>
                 {validationErrors.input2 && (
                    <div className="error-message">
                        { inputPlaceholder2 +": " + validationErrors.input2}
                    </div>
                )}
            </div>
           
        </div>
    );
}

export default LabelTwoFields;
