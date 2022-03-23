let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/holis.mp3'
conn.sendFile(m.chat, vn, 'holis.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(Hola soy nuevo)$/i

module.exports = handler
