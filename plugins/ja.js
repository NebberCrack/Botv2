let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/ja.mp3'
conn.sendFile(m.chat, vn, 'ja.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /ja|jaja|jajaja/
handler.command = /^(JA|JAJA|JAJAJA?$)/

module.exports = handler
