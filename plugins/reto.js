let handler  = async (m, { conn }) => {
  conn.reply(m.chat,`*┌────「 RETO 」─*\n*“${pickRandom(global.bucin)}”*\n*└────「 Romina 🥀 」─*`, m)
}
handler.help = ['reto']
handler.tags = ['games']
handler.command = /^(reto)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

// https://jalantikus.com/tips/kata-kata-bucin/
global.bucin = [
"Pasa el pack de una hormiga",
"Dile a tus amigos que te vas a vivir a EU y mándame una captura de lo que te haya dicho",
"Grita desde la ventana que quieres mamar y mándame el vídeo",
"Escribe el nombre de tu crush",
"Envíame una fotografía tuya",
"Escribe en tu estado de WhatsApp que te gusta comer tierra",
"Debes de poner la fotografía de un participante del grupo que sea del sexo opuesto al tuyo en tu perfil de WhatsApp durante 1 hora 📸📸",
"Tienes que mandar un audio cantando la canción: Un pato que va cantando alegremente cua cua 🦆",
"Dile a tu crush que la amas y pasa captura al grupo", 
"Envía un audio cantando", 
"Envía una foto en la que salgas tu sin taparte la cara ni nada", 
"Envia un mensaje a tu ex y dile Todavia me gustas y manda captura", 
"Envia un audio diciendo amo a Pancracio/a :v", 
"Dile a tu crush que lo amas y pasa captura en el grupo", 
"Envia un audio cantando 👩🎤", 
"Muestranos algun talento que tengas ", 
"Envia un video de alguna farra que te fuiste", 
"Di un trabalenguas en audio", 
"Elija uno de tus contactos frecuentes de WhatsApp y diles que esperas un hijo", 
"A ver una foto de tus pies", 
"A ver una foto de tus manos", 
"Chatea con tu padre o madre y diles que los extrañas con emoticonos tristes.", 
"Llama a tu mamá y dile 'mamá, quiero casarme lo antes posible' ", 
"Llama a tu ex y dile te extraño 😥", 
"Actualice el estado en WhatsApp lo que sea con palabras que comiencen con 'S' ", 
"Colorea tus uñas de las manos y manda foto.", 
"Envie el emoji '🦄💨' cada vez que escriba en el grupo x media hora", 
"Canta el coro de la última canción que escuchaste", 
"Envia un audio de voz a tu ex / enamorado / novia, dile hola (nombre), quiero llamar, solo un momento. Te Extraño🥺👉🏼👈🏼 ", 
"Haz 1 rima o improvisa algo en audio", 
"Cuenta tu propia versión de cosas vergonzosas", 
"Cambiar tu nombre de usuario a Gay durante media hora", 
"Menciona tu tipo de novia/o ", 
"Di 'Estoy enamorado de ti, ¿quieres ser mi novio o no?' al último sexo opuesto con el que conversaste en WhatsApp, espera a que responda", 
"Bromea charlar con ex y decir te amo, por favor vuelve conmigo", 
"Cambiar el nombre de usuario a Soy un hijo Hijoputa durante 10 minutos", 
"Diga USTED ES TAN HERMOSO NO MIENTO al ultimo chico que escribió en el chat",
"Debes de poner el nombre de Romina tu estado de WhatsApp",
"Envía una fotografía tuya",
"Hazte una foto dándole un beso a una Televisión 📺",
"Manda una fotografía en pijamas",
"Debes de mandar un Audio de WhatsApp diciendo que amas al cacas 📣",
"Debes de dedicarle un estado de tu WhatsApp a la integrante que te gusta",
"Utiliza la foto de una de las admin en tu perfil durante 10 minutos",
"Pon en tu estado la frase Soy un tonto y no expliques nada",
"Envía una foto alocada de ti.",
"Cuenta algo que te avergüence.",
"Envía un mensaje de voz cantando tu canción favorita.",
"Agenda a un contacto del grupo y dile hola",
"Presentanos a un amigo (a) aquí en el grupo",
"Toma una foto de tus cachetes y envíala al grupo",
"Responde: ¿Qué posición prefieres?",
"Dinos el nombre de la persona que te gusta.",
"Descríbeme a una admin con 3 emojis",
"Envía las últimas 2 fotos de tu galería",
"Mandanos un audio cantando la canción La camisa negra",
"Envía una foto de tu crush al grupo",
"Imita un meme y envía foto",
"Mánda un audio de WhatsApp cantando una canción en Inglés 🎶",
"Envía una fotografía tuya posando",
"Manda una fotografia mandando un beso al admin 😲",
"Debes de poner una foto del bot en tu perfil de WhatsApp durante 2 horas",
"Manda una foto tal cual estás ahora mismo.",
"Manda un audio contando un chiste gracioso.",
"Dedícame un estado de WhatsApp a mí",
"Pon en el primer grupo de WhatsApp que tengas, que estás enamorado/a de alguien del grupo",
"Pon en un estado de WhatsApp que amas a alguien del grupo y déjalo durante 1 día entero.",
"Entra en tu lista de contactos de WhatsApp y busca el primer contacto que empiece por S. Envíale un «Te amo ❤️» y hasta dentro de 5 minutos no podrás decirle que forma parte de un reto gracioso de WhatsApp.",
"Crea un grupo de WhatsApp de 2 personas que tu elijas, acto seguido manda un mensaje al grupo diciendo «Ya podéis confesaros vuestro amor» y te sales.",
"Actualiza tu estado de WhatsApp poniendo «Estoy enamorado/a de…» y pon las iniciales de tu mejor amigo o tu mejor amiga. (Durante 24 horas)",
"Coge en los contactos de tu WhatsApp y en el primer contacto que comience por la letra B envíale la siguiente pregunta «¿Qué hago ahora con el cuerpo?» cuando te conteste le dices que es un reto.",
"Actualiza tu foto de perfil de WhatsApp por una de un perro durante 1 hora",
"Actualiza tu estado de WhatsApp poniendo que tú y alguien del grupo hacen buena pareja.",
"Actualiza tu estado poniendo que tienes una relación con alguien del grupo",
"Envíame un audio de WhatsApp gritando lo siguiente: ¡¡TE QUIERO MUCHOOOOOOOO!! di el nombre de alguien del grupo",
"Tómate una selfie divertida y envíala",
"Envíame un meme",
"Hacer ver a alguien que estás ligando con él o con ella.",
"Llamar a tu pareja y decirle que estás embarazada.",
"Manda un emoji a tu jefe.",
"Dile a alguien que te cae mal lo que verdaderamente piensas de él/ella.",
"Admite cuál es el mayor ridículo que has hecho",
"Demuestra un talento oculto que tengas.",
"Subir  una de tus peores selfies",
"Poner la foto de perfil de uno de tus amigos durante una hora",
"Haz una lista con las partes del cuerpo que más te gustan de otra persona del grupo.",
"Manda un mensaje solo con emojis, otra persona de tu elección tendrá que decodificarlos.",
"Comenta una foto de Facebook de algún conocido. Haz que el comentario sea algo picante y manda captura",
"Escribe el mensaje ME GUSTA EL PAN a uno de tus contactos de WhatsApp",
"Manda un audio a alguien haciendo pensar que estás teniendo un orgasmo.",
"Cuenta un sueño erótico que hayas tenido y que recuerdes.",
"Admítelo: ¿alguna vez has deseado estar con alguna persona del grupo?",
"Envía un mensaje sucio a la persona del grupo de tu elección.",
"Muestra cuál es tu juguete preferido.",
"Imita a Bob Esponja en audio",
"Susurra algo atrevido y sugerente con audio"

] 
