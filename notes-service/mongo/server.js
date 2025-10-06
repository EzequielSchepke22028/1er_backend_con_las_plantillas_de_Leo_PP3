const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDb = require('./db');
const notesRoutes = require('./routes/notes');

const app = express();

app.use(cors());
app.use(express.json());

connectDb();

app.use('/api/notes', notesRoutes);

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Notes service corriendo en puerto ${PORT}`));


/*const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());
//usar este
app.use(bodyParser());

connectDb();  // Conecta a MongoDB antes de levantar el servidor

app.use('/api/auth', authRoutes); // cambia por notes o events según sea

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`Server corriendo en puerto ${PORT}`));

//o este

/*mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Mongo connected (auth-service)'))
  .catch(err => console.error(err));

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT || 4000, () =>
  console.log(`Auth running on port ${process.env.PORT || 4000}`)
);*/
