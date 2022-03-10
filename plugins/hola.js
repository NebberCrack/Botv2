let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/holis.mp3'
conn.sendFile(m.chat, vn, 'bot.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.command = /^(hola|ola|olis|Holis|Hola🤖|ola🤖)$/i

module.exports = handler
