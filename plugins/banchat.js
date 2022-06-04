let handler = async (m) => {
if (!(m.chat in global.db.data.chats) return m.reply('Este grupo no está registrado en la base de datos!')
let chat = global.db.data.chats[m.chat]
if (chat.isBanned) return m.reply('Este grupo ya está muteado!')
chat.isBanned = true
m.reply('*Grupo muteado 🔇*\n\nAhora nadie podrá utilizar ningún comando')
}

handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^(banchat)$/i
handler.owner = true
handler.mods = true
handler.group = true
handler.botAdmin = true

export default handler

