let user = a => '@' + a.split('@')[0]

let handler = async (m, { conn, command, text, groupMetadata }) => {

let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b = ps.getRandom()

let ps = groupMetadata.participants.map(v => v.id)let a = ps.getRandom()let b = ps.getRandom()
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

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
