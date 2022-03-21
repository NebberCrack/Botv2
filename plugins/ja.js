let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/ja.mp3'
conn.sendFile(m.chat, vn, 'ja.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(jajaja|JAJA|Jaja|JAJAJA|Jajaja)$/i

module.exports = handler
