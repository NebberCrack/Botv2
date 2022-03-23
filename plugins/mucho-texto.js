let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/mucho-texto.mp3'
conn.sendFile(m.chat, vn, 'mucho-texto.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Mucho texto|mucho texto|Demasiado texto|demasiado texto/
handler.command = new RegExp
module.exports = handler