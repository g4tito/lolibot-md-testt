import { execSync } from 'child_process'

let handler = async (m, { conn, text }) => {
if (global.conn.user.jid == conn.user.jid) {
let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
conn.reply(m.chat, stdout.toString(), m)
 }
}

handler.help = ['actualizar']
handler.tags = ['owner']
handler.command = /^(update|fix|actualizar)$/i
handler.owner = true

export default handler