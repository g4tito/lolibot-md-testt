/*let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃 𝙵𝚄𝙴 𝙱𝙰𝙽𝙴𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*\n\n*—◉ 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽𝙰𝚁𝙰 𝙰 𝙽𝙸𝙽𝙶𝚄𝙽 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙷𝙰𝚂𝚃𝙰 𝙳𝙴𝚂𝙱𝙰𝙽𝙴𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^banchat$/i
handler.rowner = true*/


let handler = async (m) => {
//if (!(m.chat in global.DATABASE._data.chats)) return m.reply('Este grupo no está registrado en la base de datos!')
//let chat = global.DATABASE._data.chats[m.chat]
//if (chat.isBanned) return m.reply('Este grupo ya está muteado!')
//chat.isBanned = true

global.db.data.chats[m.chat].isBanned = true
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

