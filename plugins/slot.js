import MessageType from '@adiwajshing/baileys'

let num = /([0-9])$/i

let handler = async (m, { conn, text }) => {

    conn.slot = conn.slot ? conn.slot : {}
    if (conn.slot[m.sender] == undefined) conn.slot[m.sender] = { lastslot: 0 }
    let __waktur = (new Date - conn.slot[m.sender].lastslot)
    let _waktur = (3000 - __waktur)
    let waktur = clockString(_waktur)

    if (!text) throw 'Ingrese la una cantidad de dinero!'
    if (isNaN(Number(text))) return m.reply(`La cantidad debe ser un número`)
    let money = text * 1
    if (isNaN(Number(money))) return m.reply(`La cantidad debe ser un número`)
    if (money == NaN) return m.reply(`La cantidad debe ser un número`)
    if (money == undefined) return m.reply(`La cantidad debe ser un número`)
    let _money = money / 2
    let jackpot = Math.ceil(money * 5)
    let win = Math.ceil(money * 2)
    if (money < 70) throw 'Minimo 70 de dinero'
    let users = db.data.users
    if (money > users[m.sender].money) throw 'Su dinero no es suficiente'
    if (new Date - conn.slot[m.sender].lastslot > 3000) {

    conn.slot[m.sender] = { lastslot: new Date * 1 }

    let emojis = ["🍏","🍎","🍊","🍋","🍑","🪙","🍅","🍐","🍒","🥥","🍌"];
    let a = Math.floor(Math.random() * emojis.length);
    let b = Math.floor(Math.random() * emojis.length);
    let c = Math.floor(Math.random() * emojis.length);
    let x = [],
        y = [],
        z = [];
    for (let i = 0; i < 3; i++) {
        x[i] = emojis[a];
        a++;
        if (a == emojis.length) a = 0;
    }
    for (let i = 0; i < 3; i++) {
        y[i] = emojis[b];
        b++;
        if (b == emojis.length) b = 0;
    }
    for (let i = 0; i < 3; i++) {
        z[i] = emojis[c];
        c++;
        if (c == emojis.length) c = 0;
    }
    let end;
    if (a == b && b == c) {
        let end = "";
        let hasil = `*Ganaste x3!*\n+${shortNum(jackpot)} de Dinero`;
        let gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} *⇐*\n${x[2]} | ${y[2]} | ${z[2]}`;
        db.data.users[m.sender].money += jackpot
        await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')

    } else if (a == b || a == c || b == c) {
        let end = "";
        let hasil = `*Ganaste x2!*\n+${shortNum(win)} de Dinero`;
        let gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} *⇐*\n${x[2]} | ${y[2]} | ${z[2]}`;
        db.data.users[m.sender].money += win
        await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    } else {
        let end = "";
        let hasil = `*Suerte la próxima!*\n-${shortNum(_money)} de Dinero`;
        let gcha = `${x[0]} | ${y[0]} | ${z[0]}\n${x[1]} | ${y[1]} | ${z[1]} *⇐*\n${x[2]} | ${y[2]} | ${z[2]}`;
        db.data.users[m.sender].money -= _money * 1
        await conn.fakeReply(m.chat, `*[ 🎰 SLOT 🎰 ]*\n\n${gcha}\n\n*[ 🎰 SLOT 🎰 ]*`, '0@s.whatsapp.net', `${hasil}`, 'status@broadcast')
    }
  } else m.reply(`Espere ${waktur}`)
}

handler.help = ['slot']
handler.tags = ['game']
handler.command = /^(slot|girar)$/i

export default handler

function clockString(seconds) {
  let d = Math.floor(seconds / (1000 * 60 * 60 * 24));
  let h = Math.floor((seconds / (1000 * 60 * 60)) % 24);
  let m = Math.floor((seconds / (1000 * 60)) % 60);
  let s = Math.floor((seconds / 1000) % 60);
  
  let dDisplay = d > 0 ? d + (d == 1 ? " dia, " : " Dias, ") : "";
  let hDisplay = h > 0 ? h + (h == 1 ? " hora, " : " Horas, ") : "";
  let mDisplay = m > 0 ? m + (m == 1 ? " minuto, " : " Minutos, ") : "";
  let sDisplay = s > 0 ? s + (s == 1 ? " segundo" : " Segundos") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};

function shortNum(num) {
return new Intl.NumberFormat('en-GB', { notation: "compact", compactDisplay: "short" }).format(num)
}
