const initialMemoryUsage = process.memoryUsage().heapUsed; // TODO 1
const yourName = process.argv[2]; // TODO 2
const environment = process.env.NODE_ENV; // TODO 3

for (let i = 0; i <= 10000; i++){
    // proses looping ini akan membuat penggunaan memori naik
}

const currentMemoryUsage = process.memoryUsage().heapUsed; // TODO 4

console.log(`Hai, ${yourName}`);
console.log(`Mode environtment: ${environment}`);
console.log(`Penggunaan memori dari  ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);

// Process Object
// Salah satu global objek yang penting untuk diketahui adalah process. 
// Dalam ilmu komputer, process adalah sebuah program yang dijalankan pada satu atau lebih thread.

// Pada Node.js, global objek process memiliki fungsi dan properti yang dapat memberikan informasi mengenai proses yang sedang berjalan.
// Salah satu yang sering digunakan adalah properti process.env. Melalui properti ini kita dapat menyimpan nilai atau mendapatkan informasi mengenai environment yang digunakan selama proses sedang berlangsung. 
// Contoh, process.env memiliki properti process.env.PWD yang menyediakan informasi mengenai lokasi di mana proses dijalankan; properti process.env.USER menyimpan informasi nama user pada komputer Anda; dan masih banyak properti lainnya. 
// Anda bisa lihat daftar lengkap properti yang ada pada halaman dokumentasi Node.js mengenai process.env.

