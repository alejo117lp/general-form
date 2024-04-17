import React, {useState} from "react";
import LabelOneSelect from "../general_components/LabelOneSelect";


function EndowmentEmvariasForm( {nameBox, userData} ){
  //Tallas Pantalones Hombre/Mujer
  const pantManSize = ['28', '30', '32', '34', '36', '38','40', '42', '44'];
  const pantWomanSize = ['8', '10', '12', '14', '16', '18','20', '22'];
  //Tallas Camisas Hombre/Mujer
  const shirtManSize = ['30', '32', '36', '38','40', '42', '44', '46', '52', '54','56'];
  const shirtWomanSize = ['8', '10', '12', '14', '16', '18','20', '22', '24'];
  //Hook useState para verificar la elección en estilo y talla de camisa
  const [selectedStyle, setSelectedStyle] = useState('');
  const [selectedShirtSize, setSelectedShirtSize] = useState('');

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
  };

  //Conversión tallas camisa
  const convertShirtSize = (size) => {
    const sizeMap = {
      '8': 'S',
      '10': 'M',
      '12': 'L',
      '14': 'XL',
      '16': '2XL',
      '18': '3XL',
      '20': '4XL',
      '22': '5XL',
      '24': '6XL',
      '30': '3XS',
      '32': '2XS',
      '36': 'S',
      '38': 'M',
      '40': 'L',
      '42': 'XL',
      '44': '2XL',
      '46': '3XL',
      '52': '6XL',
      '54': '7XL',
      '56': '8XL'
    }
    return sizeMap[size] || '';
  }
  

  const handleShirtSizeChange = (size) => {
    const convertedSize = convertShirtSize(size);
    setSelectedShirtSize(convertedSize);
  };

  /*console.log(selectedShirtSize);*/

  return(
    <div className='form-box'>
      <h3>{nameBox}</h3>  
      <div>
        <LabelOneSelect 
          labelText={'Estilo vestimenta:'}
          selectText={'Elija su estilo de dotación'}
          initialOptions={['Hombre', 'Mujer']}
          onChange={handleStyleChange}
          selectId={'dress_style'}
          defaultValue={userData?.dress_style}
        />

        {selectedStyle === 'Hombre' ? (
          <div> 
            <LabelOneSelect 
              labelText={"Talla Pantalón: "}
              selectText={"Seleccione su talla de Pantalón"}
              initialOptions= {pantManSize}
              selectId={'pant_size'}
              defaultValue={userData?.pant_size}
            />

            <LabelOneSelect 
              labelText={"Talla Camisa: "}
              selectText={"Seleccione su talla de Camisa"}
              initialOptions= {shirtManSize}
              onChange={handleShirtSizeChange}
              selectId={'shirt_size'}
              defaultValue={userData?.shirt_size}
            />
          </div>
          
        ): (
          <div>
            <LabelOneSelect 
              labelText={"Talla Pantalón: "}
              selectText={"Seleccione su talla de Pantalón"}
              initialOptions= {pantWomanSize}
              selectId={'pant_size'}
              defaultValue={userData?.pant_size}
            />
            <LabelOneSelect 
              labelText={"Talla Camisa: "}
              selectText={"Seleccione su talla de Camisa"}
              initialOptions= {shirtWomanSize}
              onChange={handleShirtSizeChange}
              selectId={'shirt_size'}
              defaultValue={userData?.shirt_size}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default EndowmentEmvariasForm;