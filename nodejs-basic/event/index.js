const { EventEmitter } = require('events'); // TODO 1 Buat atau impor variabel EventEmitter dari core module events.


const birthdayEventListener = ({name}) => {
    console.log(`Happy birthday ${name}`);
}

const myEventEmitter = new EventEmitter(); // TODO 2 Buat variabel myEmitter yang merupakan instance dari EventEmitter.

myEventEmitter.on('happy-birthday', birthdayEventListener); // TODO 3 Tentukan birthdayEventListener sebagai aksi ketika event ‘birthday’ dibangkitkan pada myEmitter.

myEventEmitter.emit('happy-birthday', { name: 'Martin'}); // TODO 4 Bangkitkanlah event ‘birthday’ pada myEmitter dengan method emit() dan beri nilai argumen listener dengan nama Anda.  
