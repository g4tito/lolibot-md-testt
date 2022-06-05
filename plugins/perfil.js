/*import { createHash } from 'crypto'
import PhoneNumber from 'awesome-phonenumber'
import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, participants }) => {
let pp = 'https://i.imgur.com/WHjtUae.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
try {
pp = await conn.profilePictureUrl(who)
} catch (e) {

} finally {
let { name, limit, lastclaim, registered, regTime, age } = global.db.data.users[who]
let username = conn.getName(who)
let prem = global.prems.includes(who.split`@`[0])
let sn = createHash('md5').update(who).digest('hex')
let str = `*𝙽𝙾𝙼𝙱𝚁𝙴:* ${username} ${registered ? '(' + name + ') ': ''}
*𝙽𝚄𝙼𝙴𝚁𝙾:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
*𝙻𝙸𝙽𝙺:* wa.me/${who.split`@`[0]}${registered ? '\n*𝙴𝙳𝙰𝙳:* ' + age + ' años' : ''}
*𝙻𝙸𝙼𝙸𝚃𝙴:* ${limit} 𝚄𝚂𝙾𝚂
*𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾:* ${registered ? 'Si': 'No'}
*𝙿𝚁𝙴𝙼𝙸𝚄𝙼:* ${prem ? 'Si' : 'No'}
*𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚂𝙴𝚁𝙸𝙴:* 
${sn}`
conn.sendButton(m.chat, str, author, pp, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)
}}
handler.help = ['profile [@user]']
handler.tags = ['xp']
handler.command = /^perfil|profile?$/i
export default handler*/


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
    //let _pp = await(await fetch(pp)).buffer()
    //let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, lastclaim, registered, regTime, age, level } = global.db.data.users[who]
    //let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let { min, xp, max } = xpRange(who.level, global.multiplier)
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

