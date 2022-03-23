let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/pensamientos-sexuales.mp3'
conn.sendFile(m.chat, vn, 'pensamientos-sexuales.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Estas hot|Esta hot|Andan cogiendo|andan cogiendo|Estan cogiendo|estan cogiendo|Sueña conmigo|Están cogiendo|están cogiendo/
handler.command = new RegExp
module.exports = handler