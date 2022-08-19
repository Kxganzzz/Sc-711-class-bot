const fs = require('fs')
const chalk = require('chalk')

// Website Api Nya Bng
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Udah Free Apikey Jadi Klo Mau Ubah Silahkan
global.APIKeys = {
	'https://zenzapis.xyz': 'sonelstore',
}

// Other
global.namabot = ['7.11 BETA BOT']
global.namaowner = ['yudi']
global.owner = ['62881038017683']
global.premium = ['6285935201604']
global.packname = 'Bot 7.11'
global.author = '7.11'
global.sessionName = 'Xavior'
global.prefa = ['','!','.','11','Satrya','']
global.sp = '⭔'
global.mess = {
    success: 'Sukses , Jangan Lupa Follow IG 711!!! nirvanois.se',
    admin: 'Fitur Khusus Anggota Penting 7.11!',
    botAdmin: 'Jadikan Bot Admin / Anggota penting 7.11 Terlebih Dahulu!',
    owner: 'Khusus Tukang Coding yudipermana',
    group: 'Itu Khusus grup cuy...!',
    private: 'Cuma Bisa Chat Pribadi Bre...',
    bot: 'Khusus Nomor Bot',
    wait: 'Tunggu, Jangan lupa Follow IG 711!!! nirvanois.se',
    endLimit: 'Limit Harian Sudah Habis, Minta Owner menjadikan kamu premium',
}
//Kalo Ngasih Limit Jangan Dikit Lah Bng
global.limitawal = {
    premium: "Infinity",
    free: 97
}
global.thumb = fs.readFileSync('./lib/711enc.jpg')
global.visoka = { url: 'https://telegra.ph/file/15209657f9d4f59c7ca1e.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
