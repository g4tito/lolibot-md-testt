import MessageType from '@adiwajshing/baileys'
import crypto from 'crypto'
import fs from 'fs'
import fetch from 'node-fetch'

let Reg = /(.*)([.|])([0-9]*)$/i
let Rname = /([A-Za-z])$/i

let handler = async (m, { conn, text, usedPrefix, command }) => {
  let user = db.data.users[m.sender]
  if (user.registered === true) throw `*Ya estas registrado*, quieres volver a registrarte?\nUse ${usedPrefix}unreg su codigo`
  if (!Reg.test(text)) throw `*Registro no valido*\n- Ejemplo: ${usedPrefix + command} nombre|edad\n\nNo se olvide del "|"`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'El nombre no puede estar vacio!'
  if (!age) throw 'La edad no puede estar vacia!'
  if (!Rname.test(name)) throw 'Ponga un nombre valido'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash(m.sender, 7)
  //createHash('md5').update(m.sender).digest('hex')
  let reuser = await conn.profilePictureUrl(m.sender)
  try {
    let reuser = await conn.profilePictureUrl("51940617554-1604073088@g.us")
  } catch (e) {
    
  } finally {
  let repp = await(await fetch(reuser)).buffer()
  let retext = `\t\t\t*‧ 🧇 Usuario Registrado 🧇 ‧*

 *◦ Nombre:* ${name}
 *◦ Edad:* ${age} años
 *◦ Codigo:* ${sn}

 *◦ Fecha:* ${date}
 *◦ Hora:* ${time}`
conn.sendButton(m.chat, retext, 'No olvides tu *codigo* por qué sera necesario para futuras actuaciones', reuser, [['🐱 CREADOR', `${usedPrefix}creador`], ['🥮 MENU', `${usedPrefix}menu`]], m)
 }
}

handler.help = ['registrar']
handler.tags = ['xp']
handler.command = /^(registrar|registrarse|daftar|register|reg)$/i

export default handler 

function createHash(data, len) {
    return crypto.createHash("shake256", { outputLength: len })
      .update(data)
      .digest("hex");
}

let d = new Date(new Date + 3600000)

let date = d.toLocaleDateString('es', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })

let time = d.toLocaleString('en-US', { 
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true 
    })
