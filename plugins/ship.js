let user = a => '@' + a.split('@')[0]

function handler(m, { groupMetadata, command, conn }) {

let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()
let crz = (pickRandom(['💖', '❤', '💞', '💓', '💗', '❣', '💟']))

let ship = `\t\t*‧ ${crz} La pareja del dia ${crz} ‧*

*${user(a)} + ${user(b)}*`
m.reply(ship)
}

handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^(ship|shiping)$/i
handler.group = true

exports default handler
