const http = require('http');

const requestListener = (request, response) => {
    response.setHeader('Content-Type', 'application/json');
    response.setHeader('X-Powered-By', 'NodeJS');
    response.statusCode = 200;

    const { method, url } = request;

    if(url === '/'){
        // TODO 2 : logika respons bila url bernilai '/'
        if(method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({message: 'Ini adalah homepage', }));
        }else{
            response.statusCode = 400;
            response.end(JSON.stringify({message: 'Halaman tidak dapat diakses dengan ${method} request', }));
        }
    
    } else if(url === '/about'){
        // TODO 3 : logika respons bila url bernilai '/about'
        if (method === 'GET'){
            response.statusCode = 200;
            response.end(JSON.stringify({message: 'Halo! Ini adalah halaman about', }));
        }else if(method === 'POST'){
            // logika stream
            let body = [];
    
            request.on('data', (chunk) => {
                body.push(chunk);
            });
    
            request.on('end', () => {
                body = Buffer.concat(body).toString();
                const { name } = JSON.parse(body);
                response.statusCode = 200;
                response.end(JSON.stringify({message: `Hallo, ${name}! Ini adalah halaman about`, }));
            });
        } else {
            response.statusCode = 400;
            // TODO 1: logika respons bila url bukan '/' atau 'about'
            response.end(JSON.stringify({message: `Halaman tidak dapat diakses dengan ${method}, request`}));
        }
    } else {
        response.statusCode = 404;
        response.end(JSON.stringify({message: 'Halaman tidak ditemukan!',}));
    }   
};

const server = http.createServer(requestListener);

const port = 5000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server berjalan pada http://${host}:${port}`);
});

// Membangun web server

// Response status merupakan salah satu bagian dari respons yang berisikan tentang informasi apakah sebuah request berhasil atau gagal dilakukan. Status yang diberikan berupa kode (status code) dan pesan dari kode tersebut dalam bentuk teks (status message).
/**
 * Indikasi keberhasilan request client ditentukan oleh response status code yang dikirim oleh server. 
 * Karena itu, tentu nilai status code tak bisa sembarang kita tetapkan. Status code haruslah bernilai 3 digit angka dengan ketentuan berikut:
    100-199 : informational responses.
    200 - 299 : successful responses.
    300-399 : redirect.
    400-499 : client error.
    500-599 : server errors.
 */