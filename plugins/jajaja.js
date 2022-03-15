let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/jajaja.mp3'
conn.sendFile(m.chat, vn, 'jajaja.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /jaja|jajaja|JAJA/
handler.command = /^(jajajaja|jaja|JAJA?$)/

module.exports = handler
