let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/te-quiero.mp3'
conn.sendFile(m.chat, vn, 'te-quiero.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Te quiero|te quiero|Te quiero mucho|te quiero mucho|Tqm|tqm|TQM/
handler.command = new RegExp
module.exports = handler