const express = require('express'); //Se usa para construir la estructura básica del servidor, definir rutas/APIs, y manejar solicitudes/responses HTTP.
const mysql = require('mysql2');// se utiliza para conectar y comunicarse con una base de datos MySQL, permitiéndote realizar operaciones de base de datos como consultas, inserciones, actualizaciones, etc.
const cors = require('cors'); // se emplea para habilitar solicitudes de origen cruzado, permitiendo que tu API sea accesible desde dominios diferentes al del servidor, lo cual es común en aplicaciones web modernas que separan el frontend del backend.
const multer = require('multer');

const app = express();
const port = 3001;

app.use(cors());

// Multer configura para almacenar archivos cargados en memoria
const upload = multer({ storage: multer.memoryStorage() });

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user_system',
  password: '123456789',
  database: 'empleados',
});

connection.connect(error => {
  if (error) {
    console.error('Error al conectar a la base de datos:', error);
    return;
  }
  console.log('Conexión a la base de datos establecida con éxito');
});

// Ruta para obtener datos de un empleado por su ID
app.get('/api/empleados/:id', (req, res) => {
  const empleadoId = req.params.id;
  connection.query('SELECT * FROM tb_empleados WHERE id_document = ?', [empleadoId], (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Error al obtener datos de la base de datos' });
      return;
    }
    if (results.length === 0) {
      res.status(404).json({ error: 'Empleado no encontrado' });
      return;
    }

    const employee = results[0];
    if(employee.photo){
      employee.photo = Buffer.from(employee.photo).toString('base64');
      employee.photo = `data:image/jpeg;base64,${employee.photo}`;
    }

    res.json(employee);
  });
});

// Ruta para actualizar datos de empleados y cargar archivos
app.post('/api/empleados/actualizar', upload.single('photo'), (req, res) => {
 
  const { id_document, ...fieldsToUpdate } = req.body;

  if (!id_document) {
    return res.status(400).json({ error: 'El ID del documento es requerido.' });
  }

  // Asumiendo que todos los demás campos aparte de 'photo' son texto y se incluyen en `fieldsToUpdate`
  const setClause = Object.keys(fieldsToUpdate)
    .filter(key => key !== 'photo')
    .map(key => `${key} = ?`)
    .join(', ');

  const values = [...Object.values(fieldsToUpdate), req.file.buffer, id_document];

  if (req.file) {
    // Si hay un archivo, inclúyelo en la actualización
    setClause += ', photo = ?';
    values.push(req.file.buffer);
  }
  
  values.push(id_document);

  // Actualizar datos en la base de datos, incluyendo la imagen
  const query = `UPDATE tb_empleados SET ${setClause}, photo = ? WHERE id_document = ?`;

  connection.query(query, values, (error, results) => {
    if (error) {
      console.error('Error al actualizar datos en la base de datos:', error);
      return res.status(500).json({ error: 'Error al actualizar datos en la base de datos' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Empleado no encontrado' });
    }
    res.json({ message: 'Datos e imagen actualizados correctamente' });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});