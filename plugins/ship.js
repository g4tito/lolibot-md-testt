let R = Math.random
let Fl = Math.floor
let toM = a => '@' + a.split('@')[0]

let handler = async (m, { conn, command, text, groupMetadata }) => {
    let ps = groupMetadata.participants.map(v => v.jid)
    let a = ps[Fl(R() * ps.length)]
    let b
    do b = ps[Fl(R() * ps.length)]
    while (b === a)
    let c
    do c = ps[Fl(R() * ps.length)]
    while (b === a)
    let d
    do d = ps[Fl(R() * ps.length)]
    while (b === a)
    let e
    do e = ps[Fl(R() * ps.length)]
    while (b === a)
    let f
    do f = ps[Fl(R() * ps.length)]
    while (b === a)
    let g
    do g = ps[Fl(R() * ps.length)]
    while (b === a)
    let h
    do h = ps[Fl(R() * ps.length)]
    while (b === a)
    let i
    do i = ps[Fl(R() * ps.length)]
    while (b === a)
    let j
    do j = ps[Fl(R() * ps.length)]
    while (b === a)

let crz = (pickRandom(['💖', '❤', '💞', '💓', '💗', '❣', '💟']))

let ship = `\t\t*‧ ${crz} La pareja del dia ${crz} ‧*

*${toM(a)} + ${toM(b)}*`
m.reply(ship)

}

handler.help = ['ship']
handler.tags = ['fun']
handler.command = /^(ship|shiping)$/i
handler.group = true

exports default handler

function pickRandom(list) { return list[Math.floor(Math.random() * list.length)]}
