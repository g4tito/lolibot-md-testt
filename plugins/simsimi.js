import fetch from 'node-fetch'

let handler = async (m, { text, usedPrefix, command }) => {
if (!text) throw `Ingrese un texto junto al comando`
let res = await fetch(`https://api-sv2.simsimi.net/v2/?text=${text}&lc=es`)
let json = await res.json()
let tes = json.success.replace('simsimi', 'simsimi').replace('Simsimi', 'Simsimi').replace('sim simi', 'sim simi')
m.reply(`${tes}`)
}

handler.help = ['simsimi']
handler.tags = ['General']
handler.command = /^(simi|simsimi)$/i

export default handler
