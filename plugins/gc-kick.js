/*import { areJidsSameUser } from '@adiwajshing/baileys'

let handler = async (m, { conn, participants }) => {
let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id))
let kickedUser = []
for (let user of users)
if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
const res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
kickedUser.concat(res)
await delay(1 * 1000)
}}

handler.help = ['kick @user']
handler.tags = ['group']
handler.command = /^(kick|sacar|\-)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))*/


let handler = async (m, { command, text, groupMetadata }) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
  //if (!m.chat) return m.reply('Etiqueta a alguien del grupo para eliminar!')
  if (!groupMetadata.participants.some(v => v.jid === user)) return m.reply('El usuario ya no está en el grupo!')
  let owr = m.chat.split`-`[0]
  if (user.startsWith(owr)) return m.reply('No puedo eliminarlo\'a por que el creó el grupo')
  await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
  conn.reply(m.chat, 'Se eliminó al usuario!', m)
}

handler.help = ['kick']
handler.tags = ['adm']
handler.command = /^(kick|ban|echar|sacar)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler


const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

