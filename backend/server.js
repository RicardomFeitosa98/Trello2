const http = require('http');
const axios = require('axios');
const cors = require('cors');
const database = require('./database');

const port = 3001;

const server = http.createServer(async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Methods", "DELETE, POST, GET, OPTIONS")
  res.setHeader("Access-Control-Allow-Headers", "*") 

  if(req.method === 'OPTIONS'){
    res.statusCode = 200
    res.end()
  }

  if (req.method === 'GET' && req.url === '/api/users') {
    try {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(database.users));
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end('Erro interno do servidor');
    }
  
  }
  if(req.method === "POST" && req.url ==="/api/auth") {
      let requestBody = ''
      req.on('data', (data) => {
        requestBody += data.toString();
      });
      req.on('end', () => {
        if('{"username":"ricardo","password":"edson"}' == requestBody){
          res.end('{"message":"OK"}') 

        }
        else{
          res.end('{"message":"tenho depressão"}')
        }
   
      })
        
      
    
       
  }
  else {
    res.statusCode = 404;
    res.end('Não encontrado');
  }
});

server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});