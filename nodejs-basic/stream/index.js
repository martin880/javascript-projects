/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

 const fs = require('fs');
 const { resolve } = require('path');
 
 const readableStream = fs.createReadStream(resolve(__dirname, './input.txt'), {
     highWaterMark: 15,
 });

 const writeableStream = fs.createWriteStream(resolve(__dirname, 'output.txt'));
 
 readableStream.on('readable', () => {
     try {
         process.stdout.write(`${readableStream.read()}\n`);
     } catch(error) {
         // catch the error when the chunk cannot be read.
     }
 });
 
 readableStream.on('end', () => {
     writeableStream.end();
 });

//  Untuk membuat writable stream dalam menulis berkas gunakanlah method createWriteStream() dari core module fs.
//  Fungsi ini menerima satu argumen yakni alamat berkas untuk menyimpan hasil data yang dituliskan. 
//  Berkas output akan dibuat secara otomatis jika tidak ada, namun bila berkas tersebut sudah ada, maka data sebelumnya akan tertimpa! Anda harus hati-hati yah!