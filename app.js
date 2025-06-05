const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const connectDataBase = require('./config/connectionDatabase');
const product = require('./routes/product');
const order = require('./routes/order');

dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

const app = express();
app.use(express.json());
app.use(cors());

connectDataBase();

// Swagger Setup
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'AlphaTech API',
      version: '1.0.0',
      description: 'API documentation for AlphaTech backend',
    },
    servers: [
      {
        url: 'http://localhost:' + process.env.PORT,
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/alphatech/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/alphatech/api', product);
app.use('/alphatech/api', order);




// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${process.env.PORT}`);
  console.log(`Swagger docs at http://localhost:${process.env.PORT}/alphatech/api-docs`);
});
