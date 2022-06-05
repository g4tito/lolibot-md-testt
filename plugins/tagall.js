let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
let pesan = args.join` `
let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
let teks = `\t\t\t*‧ 🏷️ Mencionar Usuarios 🏷️ ‧*

*• Mensaje:* ${text ? text : '×'}

*• Etiquetas:*
`
for (let mem of participants) {
teks += `- @${mem.id.split('@')[0]}\n`
}
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}

handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true

export default handler
