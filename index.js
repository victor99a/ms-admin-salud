const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const adminRoutes = require('./src/routes/adminRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('MS Admin Health - Conectado');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});