import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
let nek = ne.split('\n')
let neko = pickRandom(nek)
conn.sendFile(m.chat, ss, 'error.png', 'NEKO 🐾💗', m)
}

handler.help = ['neko']
handler.tags = ['random']
handler.command = /^(neko)$/i

export default handler


function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
