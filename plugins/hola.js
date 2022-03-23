let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/holis.mp3'
conn.sendFile(m.chat, vn, 'holis.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(hola soy nuevo|ola soy nuevo|Ola soy nuevo|hola soy nueva|ola soy nueva|Ola soy nueva|olis|Holis|Hola🤖|ola🤖)$/i

module.exports = handler
