import fs from 'fs'

let handler = async (m, { conn, args }) => {
await conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(m.chat), m)   
}

handler.help = ['link']
handler.tags = ['group']
handler.command = /^(linkgc|link|linkgroup)?$/i
handler.group = true
handler.botAdmin = true

export default handler
