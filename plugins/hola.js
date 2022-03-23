let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let vn = './media/holis.mp3'
conn.sendFile(m.chat, vn, 'holis.mp3', null, m, true, {
type: 'audioMessage', 
ptt: true 
})
}
handler.customPrefix = /Hola soy nuevo|hola soy nuevo/
handler.command = new RegExp
module.exports = handler
