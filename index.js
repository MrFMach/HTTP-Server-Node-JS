const http = require('http');

const srv = http.createServer((req, res) => {
    console.log('MÉTODO: ', req.method);
    console.log('HEADERS: ', req.headers);
    console.log('HTTP VERSÃO: ', req.httpVersion);

    if (req.method === "POST")  {
        res.writeHead(201, {
            'Content-type': 'application/json'
        })
        res.write('{"message": "Cadastro realizado com sucesso"}')
    }

    if (req.method === "GET")   {
        res.writeHead(200, {    
        'Content-Type': 'text/html'
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
    }
    res.end()   // envia mensagem
    
});

srv.listen(3001, () => {        
    console.log('Servidor funcionando!');
});