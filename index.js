console.clear()
console.log(' SPROHUB BOT ')

import { join, dirname } from 'path'
import { createRequire } from 'module'
import { fileURLToPath } from 'url'
import { setupMaster, fork } from 'cluster'
import { watchFile, unwatchFile } from 'fs'
import cfonts from 'cfonts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)

cfonts.say('SPROHUB BOT', {
  font: 'block',
  align: 'center',
  gradient: ['#ff9a9e', '#fad0c4', '#fad0c4'],
  background: 'Black',
  letterSpacing: 1,
  lineHeight: 1,
  space: true,
  maxLength: '0',
  env: 'node'
})

console.log('\x1b[36m%s\x1b[0m', '═'.repeat(60))
console.log('\x1b[33m%s\x1b[0m', '   𑁍 SPROHUB BOT - Byakugan Activado 𑁍')
console.log('\x1b[36m%s\x1b[0m', '═'.repeat(60))

cfonts.say('EL VIGILANTE & BRAYANRK', {
  font: 'console',
  align: 'center',
  gradient: ['#a18cd1', '#fbc2eb', '#fbc2eb'],
  env: 'node'
})

console.log('\x1b[32m%s\x1b[0m', '\n"𑁍 No me rendiré, porque quiero ser fuerte como Naruto-kun 𑁍"')
console.log('\x1b[36m%s\x1b[0m', '═'.repeat(60) + '\n')

let isWorking = false
let restartCount = 0

async function launch(scripts) {
  if (isWorking) return
  isWorking = true
  restartCount++

  for (const script of scripts) {
    const args = [join(__dirname, script), ...process.argv.slice(2)]

    console.log('\x1b[35m%s\x1b[0m', ` Despertando a SPROHUB - Intento #${restartCount}`)
    console.log('\x1b[33m%s\x1b[0m', '𑁍 Cargando chakra... 𑁍\n')

    setupMaster({
      exec: args[0],
      args: args.slice(1),
    })

    let child = fork()

    child.on('exit', (code) => {
      console.log('\x1b[31m%s\x1b[0m', `\n SPROHUB se ha desmayado (Código: ${code})`)

      if (code === 0) {
        console.log('\x1b[32m%s\x1b[0m', ' SPROHUB BOT se ha dormido tranquilamente')
        return
      }

      isWorking = false

      console.log('\x1b[33m%s\x1b[0m', ' SPROHUB está recuperando chakra...')
      console.log('\x1b[36m%s\x1b[0m', '𑁍 ¡Byakugan reactivándose! 𑁍\n')

      setTimeout(() => {
        launch(scripts)
      }, 1000)

      watchFile(args[0], () => {
        unwatchFile(args[0])
        console.log('\x1b[35m%s\x1b[0m', ' ¡Actualización detectada! SPROHUB se transforma...')
        launch(scripts)
      })
    })

    child.on('message', (msg) => {
      if (msg === 'ready') {
        console.log('\x1b[32m%s\x1b[0m', ' SPROHUB BOT ESTÁ LISTA ')
        console.log('\x1b[33m%s\x1b[0m', '𑁍 Byakugan completamente activado 𑁍\n')
      }
    })
  }
}

console.log('\x1b[36m%s\x1b[0m', ' Invocando a SPROHUB... \n')

launch(['main.js'])

setTimeout(() => {
  console.log('\x1b[35m%s\x1b[0m', `
╔════════════════════════════════════╗
║      ¡SPROHUB BOT HA DESPERTADO!      ║
║         𑁍 BYAKUGAN ACTIVO 𑁍         ║
╚════════════════════════════════════╝
  `)
}, 2000)

process.on('uncaughtException', (err) => {
  console.log('\x1b[31m%s\x1b[0m', ' ¡El chakra está descontrolado! ')
  console.log('\x1b[33m%s\x1b[0m', ' SPROHUB está controlando su respiración...')
  console.error(err)
})

process.on('unhandledRejection', (err) => {
  console.log('\x1b[31m%s\x1b[0m', ' ¡El Byakugan vio algo perturbador! ')
  console.log('\x1b[33m%s\x1b[0m', ' SPROHUB está cerrando los ojos y enfocándose...')
  console.error(err)
})