/*import os from 'os'
import util from 'util'
import { sizeFormatter } from 'human-readable'
import speed from 'performance-now'
import fs from 'fs'

let format = sizeFormatter({
  std: 'JEDEC', // 'SI' (default) | 'IEC' | 'JEDEC'
  decimalPlaces: 2,
  keepTrailingZeroes: false,
  render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, text, usedPrefix }) => {
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
  const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
  const groups = chats.filter(([id]) => id.endsWith('@g.us'))
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
    return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
    last.total += cpu.total
    last.speed += cpu.speed / length
    last.times.user += cpu.times.user
    last.times.nice += cpu.times.nice
    last.times.sys += cpu.times.sys
    last.times.idle += cpu.times.idle
    last.times.irq += cpu.times.irq
    return last
  }, {
    speed: 0,
    total: 0,
    times: {
      user: 0,
      nice: 0,
      sys: 0,
      idle: 0,
      irq: 0
    }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
  let totalfeatures = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length
  let infot = false //fs.readFileSync('./storage/image/menu2.jpg')
  let ownum = "51940617554@s.whatsapp.net"
  let info = `
🐋〃 Creador: @${ownum.split("@s.whatsapp.net")[0]}
❄️〃 Navegador: ${conn.browserDescription[1]}
🐋〃 Version: ${conn.browserDescription[2]}
❄️〃 Servidor: ${conn.browserDescription[0]}
🐋〃 Comandos: ${totalfeatures} Total
❄️〃 Prefijo: 「 *${usedPrefix}* 」
🐋〃 Velocidad: ${latensi.toFixed(4)} Segundos
❄️〃 Chat Privado: ${chats.length - groups.length}
🐋〃 Chat de Grupos: ${groups.length}
❄️〃 Chat Totales: ${chats.length}
🐋〃 Tiempo activo: ${uptime}
❄️〃 Usuarios: ${totalreg} Numeros
🐋〃 Bateria: ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Cargando...' : '⚡ Desconectado'}` : 'Desconocido'}
❄️〃 Sistema operativo: ${conn.user.phone.device_manufacturer}
🐋〃 Version de Wsp: ${conn.user.phone.wa_version}
❄️〃 Bots secundarios: ${totaljadibot.length} Total
`.trim() 
  conn.reply(m.chat, info, text, { quoted: m, contextInfo: { externalAdReply:{title: `↷✦╎Info - Bot╎💌˖ ⸙`, previewType:"PHOTO",thumbnail: infot, sourceUrl:``}, mentionedJid: [ownum]}})
}

handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info|infobot|información|informacion)$/i

export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}*/


import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'

let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const totalfeatures = Object.values(global.plugins).filter( (v) => v.help && v.tags ).length
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
const timestamp = speed()
const latensi = speed() - timestamp
const ownum = "51940617554@s.whatsapp.net"
let info = `
🐋〃 Creador: @${ownum.split("@s.whatsapp.net")[0]}
❄️〃 Comandos: ${totalfeatures} Total
🐋〃 Prefijo: 「 *${usedPrefix}* 」
❄️〃 Velocidad: ${latensi.toFixed(4)} Segundos
🐋〃 Chat Privado: ${chats.length - groups.length}
❄️〃 Chat de Grupos: ${groups.length}
🐋〃 Chat Totales: ${chats.length}
❄️〃 Tiempo activo: ${uptime}
🐋〃 Usuarios: ${totalreg} Numeros
`.trim() 
conn.reply(m.chat, info, text, { quoted: m, contextInfo: { externalAdReply:{title: `↷✦╎Info - Bot╎💌˖ ⸙`, previewType:"PHOTO",thumbnail: false, sourceUrl:``}, mentionedJid: [ownum]}})
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info|botinfo|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

