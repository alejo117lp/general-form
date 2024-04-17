import React from 'react';

function FileInputWithDefault({ defaultFile, onChange }) {
  return (
    <div>
      <label htmlFor="fileInput">Seleccionar archivo:</label>
      <input
        type="file"
        id="fileInput"
        onChange={onChange}
        style={{ display: 'none' }}
      />
      <button onClick={() => document.getElementById('fileInput').click()}>
        Seleccionar archivo
      </button>
      {defaultFile && <p>Archivo seleccionado: {defaultFile}</p>}
    </div>
  );
}

export default FileInputWithDefault;
