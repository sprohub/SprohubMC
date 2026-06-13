# SPROHUB-Bot (base por samu)

Bot de WhatsApp basado en Baileys, con sistema de plugins. Esta es tu **base limpia** lista para que crees tus propios comandos.

## 🚀 Instalar y correr

```bash
npm install
node index.js
```

Escanea el QR (o usa código de emparejamiento, según `index.js`) con el WhatsApp del bot.

## 📁 Estructura importante

- `index.js` / `main.js` / `handler.js` → núcleo del bot, NO tocar a menos que sepas qué haces
- `lib/` → funciones internas (base de datos, conversores, etc.)
- `plugins/` → **AQUÍ van tus comandos**, un archivo = uno o más comandos
- `json/settings.json` → configuración por grupo
- `storage/` → base de datos local del bot

## 🧩 Cómo crear un plugin nuevo

1. Copia `plugins/sprohub-saludo.js` y renómbralo, ej: `plugins/sprohub-miscomando.js`
2. Estructura básica:

```js
let handler = async (m, { conn, command, text, args }) => {
  await conn.sendMessage(m.chat, { text: 'Respuesta aquí' }, { quoted: m })
}

handler.command = /^(comando1|alias1)$/i
handler.help = ['comando1']
handler.tags = ['main']
handler.desc = 'Qué hace este comando'

export default handler
```

3. Guarda el archivo. El bot detecta los plugins automáticamente gracias a `lib/plugins.js`.

## 🏷️ Categorías disponibles (tags)

Definidas en `plugins/prin-menu.js`:
`main, group, rpg, game, gacha, diversion, anime, serbot, owner, downloader, info`

Si quieres una categoría nueva, agrégala al objeto `tags` y `bannerCategory` en ese archivo.

## ⚙️ Opciones útiles del handler

- `handler.group = true` → solo funciona en grupos
- `handler.private = true` → solo funciona en chat privado
- `handler.admin = true` → solo admins del grupo
- `handler.botAdmin = true` → el bot debe ser admin
- `handler.owner = true` → solo el número owner del bot
- `handler.register = true` → requiere registro previo

## 💾 Base de datos

Accede a los datos con `global.db.data.users[m.sender]` (usuarios) o `global.db.data.chats[m.chat]` (grupos).

---
Bot por **SPROHUB** — créditos: **samu**
