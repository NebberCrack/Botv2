let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/guapo.mp3'
conn.sendFile(m.chat, vn, 'guapo.mp3', null, m, true, {
type: 'audioMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Guapa|Guapo|guapa|guapo/
handler.command = new RegExp
module.exports = handler