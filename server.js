const express = require('express')
const swStats = require('swagger-stats');
const swaggerUi = require('swagger-ui-express');
const apiSpec = require('./swagger.json');
const promClient = require('prom-client');

promClient.collectDefaultMetrics();
const app = express()
const port = 3000
app.use(swStats.getMiddleware({swaggerSpec:apiSpec}));

app.get('/', (req, res) => {
  res.send('Hola Grafana!')
})

// Serve Swagger UI at /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(apiSpec));


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})