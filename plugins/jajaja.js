let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/jajaja.mp3'
conn.sendFile(m.chat, vn, 'jajaja.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(jaja|jajaja|JAJA|JAJAJA)$/i

module.exports = handler
