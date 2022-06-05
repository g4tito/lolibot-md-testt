let user = a => '@' + a.split('@')[0]

function handler(m, { groupMetadata, command, conn }) {

let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let crz = ['💖', '❤', '💞', '💓', '💗', '❣', '💟']
let cz = crz.getRandom()

let ship = `\t\t*‧ ${cz} La pareja del dia ${cz} ‧*

*${user(a)} + ${user(b)}*`
m.reply(ship, null, { contextInfo: { mentionedJid: [a, b] } })
}

handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^(ship|shiping)$/i
handler.group = true

export default handler
