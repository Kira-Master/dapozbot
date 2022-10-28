/**
   * Base By Dika Ardnt
   * Create By Nazs
   * Recode By Dapa Maker
   * Contact Me on wa.me/6281349277979
   * Follow https://github.com/DapaZX
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapis.xyz': '0e92565522',
}

// Other
global.owner = ['6283141087596']  // No Owner
global.ownernomer = "6283141087596" // No Owner
global.premium = ['6283141087596'] //Buat Yang Mau Beli Premium Bisa Add no nya Disini
global.packname = 'DAPOZ' // ganti namalu
global.ownername = "DAPOZ." //ganti namalu
global.author = 'DAPOZ - MAKER' // ganti namalu
global.sessionName = 'kirabot'  //serah apa
global.prefa = ['.']
global.sp = ''
global.mess = {
    success: 'Done',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    premime: 'Fitur Khusus Premium Kalo Mau Daftar Ketik Sewa',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "∞",
    free: 15
}
global.thumb = fs.readFileSync('./image/naze.jpg')
global.vaze = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
