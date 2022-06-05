function handler(m, { conn }) {
let id = global.owner[0]
let name = this.getName(global.owner[0] + '@s.whatsapp.net')
this.sendContact(m.chat, [id, name], m)
}

handler.help = ['creador']
handler.tags = ['info']
handler.command = /^(owner|creator|creador|propietario)$/i

export default handler


/*let handler = async function (m, { conn }) {
  let list = []
  let owner = [global.owner[0], global.owner[0], global.owner[0], global.owner[0], global.owner[0], global.owner[0], global.owner[0], global.owner[0]]
  for (let i of owner.map(v => v + '@s.whatsapp.net')) {
    let name = this.getName(global.owner[0] + '@s.whatsapp.net')
    list.push({
      "displayName": name,
      "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:;${name};;;\nFN:${name}\nitem1.TEL;waid=${i.split('@')[0]}:${i.split('@')[0]}\nitem1.X-ABLabel:Creador de la loli bot xD\nitem2.EMAIL;type=INTERNET:Gatito@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://github.com/g4tito/lolibot\nitem3.X-ABLabel:Github\nitem4.ADR:;;Perú;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
    })
  }
  await conn.sendMessage(m.chat, {
    "displayName": `7 Contacts`,
    "contacts": list
  }, 'contactsArrayMessage', { quoted: m })
}

handler.help = ['creador']
handler.tags = ['info']
handler.command = /^(creador|owner|creator)$/i

export default handler*/

