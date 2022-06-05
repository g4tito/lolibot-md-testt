import { googleImage } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
const res = await googleImage(text)
await m.reply(`${JSON.stringify(res, null, 1)}`)
let image = res.getRandom()
let teks = `\t\t\t‧ 🪴 *Imagen de Google* 🪴 ‧

*• Link:* ${image}`
conn.sendFile(m.chat, image, 'error.png', teks, m)
}

handler.help = ['imagen']
handler.tags = ['internet']
handler.command = /^(gimage|image|imagen)$/i

export default handler


/*import { promisify } from 'util'
import fetch from 'node-fetch'
import _gis from 'g-i-s'

let gis = promisify(_gis)

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `*Que imagen quiere buscar*\n\n- Ejemplo: ${usedPrefix + command} Minecraft`
  await conn.reply(m.chat, wait, m)
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw error
  conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'imagen.jpg', `\t\t\t‧ 🪴 *Imagen de Google* 🪴 ‧\n\n*• Búsqueda:* ${text}\n*• Tamaño:* ${width + '×' + height} Pixeles\n*• Link:* ${url}`, m)
}

handler.help = ['imagen']
handler.tags = ['internet']
handler.command = /^(gimage|image|imagen)$/i

export default handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}*/
