let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/bienvenido.mp3'
conn.sendFile(m.chat, vn, 'bienvenido.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Bienvenido|Bienvenida/
handler.command = new RegExp
module.exports = handler