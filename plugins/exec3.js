import cp from 'child_process'
import { promisify } from 'util'

//let cp = require('child_process')
//let { promisify } = require('util')
//let exec = promisify(cp.exec).bind(cp)

let handler = async (m, { conn, usedprefix, command, text }) => {
  try {
   return m.reply(JSON.stringify(eval(command.trimStart() + ' ' + text.trimEnd()), null, "\t"))
  } catch (err) {
   e = String(err);
   m.reply(e);
  }
}

handler.help = ['<']
handler.tags = ['advanced']
handler.customPrefix = /^[<] /
handler.command = new RegExp
handler.owner = true

module.exports = handler
