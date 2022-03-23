let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/internet-malo.mp3'
conn.sendFile(m.chat, vn, 'internet-malo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /No me carga|no me carga|No carga|no carga|Muy lento|muy lento/
handler.command = new RegExp
module.exports = handler