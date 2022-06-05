import { googleImage } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `Use example ${usedPrefix}${command} Minecraft`
const res = await googleImage(text)
await m.reply(`${JSON.stringify(res, null, 1)}`)
let image = res.getRandom()
/*let teks = `\t\t\t‧ 🪴 *Imagen de Google* 🪴 ‧

*• Búsqueda:* ${text}
*• Tamaño:* ${width + '×' + height} Pixeles
*• Link:* ${url}`
conn.sendFile(m.chat, image, 'error.png', teks, m)*/
}

handler.help = ['imagen']
handler.tags = ['internet']
handler.command = /^(gimage|image|imagen)$/i

export default handler
