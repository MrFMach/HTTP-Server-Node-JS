const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpVersion);

    res.end('Ola servidor HTTP!!');
});

srv.listen(3001, () => {
    console.log('Servidor funcionando!');
})