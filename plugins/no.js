let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/no-chupalo.mp3'
conn.sendFile(m.chat, vn, 'no-chupalo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /No quiero|no quiero|No chupalo|no chupalo|No chupala|no chupala/
handler.command = new RegExp
module.exports = handler