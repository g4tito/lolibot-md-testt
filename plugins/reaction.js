let handler = async (m, { conn, usedprefix, text, args }) => {
let key = {
	"remoteJid": m.chat,
	"fromMe": false,
	"id": m.quoted.id,
	"participant": m.quoted.sender
        }

await conn.sendMessage(m.chat, { react: { text: args[0], key: key } })
}

handler.help = ['reaccion']
handler.tags = ['fun']
handler.command = /^(reaction|read|reaccion)$/i

export default handler
