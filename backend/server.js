const http = require('http');
const axios = require('axios');
const cors = require('cors');
const database = require('./database');

const port = 3001;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // habilita CORS para todas as origens

  if (req.method === 'GET' && req.url === '/api/users') {
    try {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(database.users));
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end('Erro interno do servidor');
    }
      } else {
    res.statusCode = 404;
    res.end('Não encontrado');
  }
});

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});