import { webp2mp4 } from '../lib/webp2mp4.js'
import { ffmpeg } from '../lib/converter.js'

let handler = async (m, { conn, usedPrefix, command }) => {
let isStik = `Etiqueta un audio con el comando ${usedPrefix +command}`
if (!m.quoted) throw isStik
let mime = m.quoted.mimetype || ''
if (!/webp|audio/.test(mime)) throw isStik
let media = await m.quoted.download()
let out = Buffer.alloc(0)
if (/webp/.test(mime)) {
out = await webp2mp4(media)
} else if (/audio/.test(mime)) {
out = await ffmpeg(media, [
'-filter_complex', 'color',
'-pix_fmt', 'yuv420p',
'-crf', '51',
'-c:a', 'copy',
'-shortest'
], 'mp3', 'mp4')
}
await conn.sendFile(m.chat, out, 'error.mp4', '*Se convirtió a Video*', m, 0, { thumbnail: out })
}

handler.help = ['tovideo']
handler.tags = ['sticker']
handler.command = /^(tovideo|tomp4|mp4|amp4)$/i

export default handler
