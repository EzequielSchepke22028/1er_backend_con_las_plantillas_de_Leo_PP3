const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./db');
const authRoutes = require('./routes/auth');

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Auth service corriendo en puerto ${PORT}`));


/*const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./db');  // Importa la conexión a MongoDB
const routes = require('./routes'); // Cambia según el microservicio, ej: auth, notes, events

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a la base de datos
connectDb();

// Rutas principales
// Para auth: app.use('/api/auth', require('./routes/auth'));
// Para notes: app.use('/api/notes', require('./routes/notes'));
// Para events: app.use('/api/events', require('./routes/events'));
app.use('/api/endpoint', routes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servicio corriendo en puerto ${PORT}`);
});


/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./db');  // Importa la conexión 
const authRoutes = require('./routes/auth'); // o notes, events routes según carpeta

const app = express();
app.use(cors());

//usar este
app.use(bodyParser());

connectDb(); // Conecta a MongoDB antes de levantar el servidor

app.use('/api/auth', authRoutes); // cambia por notes o events según sea

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));

//o este
/*app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo connected (auth-service)'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 4000, () =>
  console.log(`Auth running on port ${process.env.PORT || 4000}`)
);*/
