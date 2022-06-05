/*import { googleIt } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, command, args }) => {
const fetch = (await import('node-fetch')).default
let full = /goo$/i.test(command)
let text = args.join` `
if (!text) return conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙸𝙽𝙶𝚁𝙴𝚂𝙴 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾 𝙾 𝚃𝙴𝙼𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙴 𝙱𝚄𝚂𝙲𝙰𝚁*', m)
let url = 'https://google.com/search?q=' + encodeURIComponent(text)
let search = await googleIt(text)
let msg = search.articles.map(({
title,
url,
description
}) => {
return `*${title}*\n_${url}_\n_${description}_`
}).join('\n\n')
try {
let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).arrayBuffer()
if (/<!DOCTYPE html>/i.test(ss.toBuffer().toString())) throw ''
await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
} catch (e) {
m.reply(msg)
}}

handler.help = ['google']
handler.tags = ['internet']
handler.command = /^(google)$/i

export default handler*/


import MessageType from '@adiwajshing/baileys'
import fetch from 'node-fetch'
import googleIt from 'google-it'

let handler = async (m, { conn, usedPrefix, command, args }) => {
  let full = /goo$/i.test(command)
  let text = args.join` `
  if (!text) return conn.reply(m.chat, `*Ingrese un texto que desea buscar*\n\n- Ejemplo: ${usedPrefix + command} Minecraft`, m)
  conn.reply(m.chat, wait, m)
  let url = 'https://google.com/search?q=' + encodeURIComponent(text)
  let search = await googleIt({ query: text })
  let msg = search.map(({ title, link, snippet}) => {
    return `*${title}*\n_${link}_\n_${snippet}_`
  }).join`\n\n─────────────────\n\n`
  let ss = await (await fetch(global.API('nrtm', '/api/ssweb', { delay: 1000, url, full }))).buffer()
  if (ss.includes('html')) throw ''
  await conn.sendFile(m.chat, ss, 'error.png', url + '\n\n' + msg, m)
}

handler.help = ['google']
handler.tags = ['internet']
handler.command = /^(google|googlef)$/i

export default handler


