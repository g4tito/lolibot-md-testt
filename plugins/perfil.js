import PhoneNumber from 'awesome-phonenumber'
import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let pp = await conn.profilePictureUrl(who, 'image')
    try {
        
    } catch {
        pp = await conn.profilePictureUrl("51940617554-1604073088@g.us", 'image')
    }
    let user = global.db.data.users[who]
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.db.data.users[who]
    //let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let { min, xp, max } = xpRange(user.level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let prem = global.prems.includes(who.split`@`[0])
    let repp = await conn.getFile(pp)
    let str = `\t\t\t\t\t*‧ 🐣 Perfil Info 🐣 ‧*

 *◦ Nombre:* ${username}
 *◦ Tag:* @${who.replace(/@.+/, '')}
 *◦ Número:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
 *◦ Link:* wa.me/${who.split`@`[0]}
 *◦ Nivel:* ${level}
 *◦ Exp:* ${exp}
 *◦ Exp nivel:* ${user.exp - min}/${max - user.exp}
 *◦ Limite:* ${limit}
 *◦ Premium:* ${prem ? 'Si' : 'No'}
 *◦ Ultimo claim:* ${lastclaim > 0 ? `${formatDate(lastclaim)}` : '×'}

 *◦ Registrado:* ${registered ? 'Si': 'No'}
 *◦ Fecha:* ${registered ? `${formatDate(regTime)}` : '×'}
 *◦ Hora:* ${registered ? `${formatHour(regTime)}` : '×'}
 *◦ Nombre:* ${registered ? `${name}` : '×'}
 *◦ Edad:* ${registered ? `${age} años` : '×'}`
    let mentionedJid = [who]
    conn.sendFile(m.chat, repp.data, 'pp.jpg', str, m, false, { contextInfo: { mentionedJid }})
}

handler.help = ['perfil']
handler.tags = ['tools']
handler.command = /^(profile|perfil)$/i

export default handler


const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function formatDate(n, locale = 'es-US') {
  let d = new Date(n)
  return d.toLocaleDateString(locale, {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function formatHour(n, locale = 'en-US') {
  let d = new Date(n)
  return d.toLocaleString(locale, {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  })
}

