const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpVersion);

    res.writeHead(200, {    // retorna um status code
        'Content-Type': 'text/html'           // tipo do conteúdo, no caso html
    })

    res.write(`
    <!DOCTYPE html>
            <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0>
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Servidor HTTP</title>
        </head>
        <body>
            <h1>Ola servidor HTTP</h1>
        <body>
        </html>
    `)

    res.end()   // envia mensagem

});


srv.listen(3001, () => {        
    console.log('Servidor funcionando!');
})