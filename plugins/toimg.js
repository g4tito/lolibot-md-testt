import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let isStik = `Etiqueta un sticker con el comando ${usedPrefix + command}`
if (!m.quoted) throw isStik
const q = m.quoted || m
let mime = q.mediaType || ''
if (!/sticker/.test(mime)) throw isStik
let media = await q.download()
let out = await webp2png(media).catch(_ => null) || Buffer.alloc(0)
await conn.sendFile(m.chat, out, 'error.png', '*Se convirtió a imágen*', m)
}

handler.help = ['toimg']
handler.tags = ['sticker']
handler.command = /^(toimg|jpg|img|aimg|aimagen)$/i

export default handler
