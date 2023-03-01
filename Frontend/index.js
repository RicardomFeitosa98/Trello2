const http = require('http');
const fs = require('fs');
const path = require('path');

// Cria o servidor
const server = http.createServer((req, res) => {
    // Obtém o caminho absoluto do arquivo a ser servido
  const filePath = path.join(__dirname, 'Content', req.url === '/' ? 'index.html' : req.url);

  // Verifica se o arquivo existe
  fs.exists(filePath, (exists) => {
    if (exists) {
      // Lê o arquivo e envia para o cliente
      fs.readFile(filePath, (err, data) => {
        if (err) {
          res.writeHead(500, {'Content-Type': 'text/plain'});
          res.write('Erro interno do servidor');
          res.end();
        } else {
          // Define o cabeçalho da resposta HTTP
          const contentType = getContentType(filePath);
          res.writeHead(200, {'Content-Type': contentType});

          // Envia o arquivo para o cliente
          res.write(data);
          res.end();
        }
      });
    } else {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.write('Arquivo não encontrado');
      res.end();
    }
  });
});

// Define a porta em que o servidor irá escutar
const port = 3000;

// Inicia o servidor
server.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

// Função auxiliar para obter o tipo MIME do arquivo
function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case '.html':
      return 'text/html';
    case '.css':
      return 'text/css';
    case '.js':
      return 'text/javascript';
    case '.json':
      return 'application/json';
    case '.png':
      return 'image/png';
    case '.jpg':
      return 'image/jpg';
    default:
      return 'application/octet-stream';
  }
}